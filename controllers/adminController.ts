import { Router } from "express";
import { ValidationError } from "sequelize";
import { User, Role, RoleUser } from "../database/connect";
import { ApiException } from "../types/exception";
import bcrypt from 'bcrypt';
import authenticateToken from "../middleware";

const adminController = Router();



/**
  * @openapi
  * /api/users/admin:
  *  post:
  *      tags: [Users]
  *      description: Add an user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: body
  *         required: true
  *         type: object
  *         default: { "password":"string","email": "email@email.com", "phone": 1111111, "isActif": true}
  *      responses:
  *        200:
  *          description: Create a new user with role.
  */
adminController.post('/', async (req, res) => {
    if (!req.body.password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })

    req.body.password = await bcrypt.hash(req.body.password, 10);
    User.create({ ...req.body }).then(async (user: any) => {

        const roleRow = await Role.findByPk(1)
        user.addRole(roleRow, { through: RoleUser })


        const message: string = `Utilisateur créé avec succes.`;
        res.json({ message, data: user });
    })
        .catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec la de la création de l'utilisateur.`
            res.status(500).json({ message, data: error })
        })
})

/**
 * @openapi
 * /api/users/admin/all:
 *   get:
 *      tags: [Users]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all admin users.
 */
adminController.get('/all',async (req, res) => {
    User.findAll({
        include: [
            {
                model: Role,
                // required: false
            }
        ],
        attributes: { exclude: ['password'] }
    })
        .then((users: any) => {
            let admins = users.filter((user: any) => user.Roles[0]?.id == 1)
            res.status(200).json(admins)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})


export { adminController };