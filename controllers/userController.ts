import { Router } from "express";
import { User, Degree, Localisation, Role, Message } from "../database/connect";
import { ApiException } from "../types/exception";
import { userTypes, userId } from "../types/user";
import { Op, ValidationError } from "sequelize";
import bcrypt from "bcrypt"
import { adminController } from "./adminController";
import { messageTypes } from "../types/message";

const usersController = Router();

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
 * @openapi
 * /api/users:
 *   get:
 *      tags: [Users]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
usersController.get("/", async (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']},
        include: [
            {
                model: Degree,
                required: false
            },
            {
                model: Localisation,
                required: false
            },
            {
                model: Role,
                required: false
            }
        ]
    })
        .then((users: userTypes) => {
            res.status(200).json(users)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})



/**
  * @openapi
  * /api/users:
  *  post:
  *      tags: [Users]
  *      description: Add an user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "password":"string","email": "email", "phone": 780372674, "isActif": true}
  *      responses:
  *        200:
  *          description: Create a new user.
  */
// usersController.post("/", async (req, res) => {
//     const { phone, email, isActif } = req.body

//     if (!req.body.password) return res.status(400).json({ passwordRequired: true, message: 'Password is required.' })

//     req.body.password = await bcrypt.hash(req.body.password, 10);
//     User.create(req.body).then((user: userTypes) => {
//         const message: string = `Utilisateur créé avec succes.`;
//         res.json({ message, data: user });
//     })
//         .catch((error: ApiException) => {
//             if (error instanceof ValidationError) {
//                 return res.status(400).json({ message: error.message, data: error })
//             }
//             const message = `Echec Utilisateur non créé.`
//             res.status(500).json({ message, data: error })
//         })
// })

/**
  * @openapi
  * /api/users/{id}:
  *  delete:
  *      tags: [Users]
  *      description: Delete an template
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an user. 
  */
// usersController.delete("/:id", (req, res) => {
//     User.findByPk(req.params.id).then((user: userId) => {
//         if (user === null) {
//             const message = "L'utilisateur n'existe pas."
//             return res.status(404).json({ message: message })
//         }

//         const userDeleted = user;
//         return User.destroy({
//             where: { id: user.id }
//         })
//             .then(() => {
//                 const message = `Utilisateur ${userDeleted.id} supprimé avec succes.`
//                 res.json({ message, data: userDeleted })
//             })
//     })
//         .catch((error: ApiException) => {
//             const message = `Echec lors de la suppression de l'Utilisateur`;
//             res.status(500).json({ message, data: error });
//         });
// })

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *      tags: [Users]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get the user of given id.
 */
usersController.get('/:id', async (req, res) => {
    User.findByPk(req.params.id, {attributes: {exclude: ['password']}})
        .then((user: userTypes) => {
            if (user === null) {
                const message = "L'utilisateur n'existe pas."
                return res.status(404).json({ message })
            }

            const message: string = 'Utilisateur trouvé.'
            res.json({ message, data: user })
        })
        .catch((error: ApiException) => {
            const message = "Echec Utilisateur non trouvé."
            res.status(500).json({ message, data: error })
        })
})

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *      tags: [Users]
 *      description: Update an template
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "password":"string","email": "email", "phone": 780372674}
 *      responses:
 *        200:
 *          description: Update the user of given id.
 */
usersController.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { phone, email, isActif } = req.body

    if (!req.body.password) return res.status(400).json({ passwordRequired: true, message: 'Besoin d\'un mot de passe.' })

    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.update({
        phone: phone,
        password: hashedPassword,
        email: email,
        isActif: isActif
    }, {
        where: { id: id },
    })
        .then(() => {
            return User.findByPk(id).then((user: userTypes) => {
                if (user === null) {
                    const message = "L'utilisateur n'existe pas."
                    return res.status(404).json({ message })
                }
                const message = `Utilisateur mis à jour`;
                res.json({ message, data: user });
            })
        })
        .catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la mise à jour de l'utilisateur.`;
            res.status(500).json({ message, data: error });
        });
})

/**
  * @openapi
  * /api/users/messages:
  *  post:
  *      tags: [Users]
  *      description: Create a messages
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "message": "mon message", "to": "1", "from": "3"}
  *      responses:
  *        200:
  *          description: Create a new message.
  */
usersController.post('/messages', async (req, res) => {
    Message.create(req.body).then((message: messageTypes) => {
        const messa: string = `message créé avec succes.`;
        res.json({ messa, data: message });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Echec de la création du message.`
        res.status(500).json({ message, data: error })
    })
})

/**
 * @openapi
 * /api/users/{from}/messages/{to}:
 *   get:
 *      tags: [Users]
 *      parameters:
 *        - name: from
 *          in: path
 *          required: true
 *          type: integer
 *          default: 3
 *        - name: to
 *          in: path
 *          required: true
 *          type: integer
 *          default: 1
 *      responses:
 *        200:
 *          description: Get the list of all messages from a discussion.
 */
usersController.get('/:from/messages/:to', async (req, res) => {
    Message.findAll({
        where: {
            [Op.or]: [
                {
                    to: req.params.to,
                    from: req.params.from
                },
                {
                    to: req.params.from,
                    from: req.params.to
                }
            ]
        }
    })
        .then((roles: messageTypes) => {
            res.status(200).json(roles)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

usersController.use("/admin", adminController)

export { usersController }