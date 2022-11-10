import { Application } from "express"
import { Error } from "sequelize"
import { ApiException } from "../../types/exception"
import { userTypes } from "../../types/user"

const { User, Role, Localisation, Degree } = require('../../database/connect')

/**
 * @openapi
 * /api/usersAdmin:
 *   get:
 *      tags: [Users]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
module.exports = (app: Application) => {
    app.get('/api/usersAdmin', (req, res) => {
        User.findAll({
            include: [
                {
                    model: Role,
                    required: false
                }
            ],
            attributes: { exclude: ['password'] }
        })
            .then((users: any) => {
                let admins = users.filter((user:any) => user.Roles[0]?.id ==1)
                console.log(admins)
                res.status(200).json(admins)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}