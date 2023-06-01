import { Router } from "express";
import { Message } from "../database/connect";
import { ApiException } from "../types/exception";
import { Op, ValidationError } from "sequelize";
import { adminController } from "./adminController";
import { messageTypes } from "../types/message";
import { userHandler } from "../inject";

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
usersController.get("/", userHandler.getUsers)




usersController.post("/contact", userHandler.contact)

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
usersController.get('/:id',userHandler.getUserId)

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