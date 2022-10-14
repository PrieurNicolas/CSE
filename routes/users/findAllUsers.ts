import { Application } from "express"
import { Error } from "sequelize"
import { ApiException } from "../../types/exception"
import { userTypes } from "../../types/user"

const { User } = require('../../database/connect')

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
module.exports = (app : Application) => {
    app.get('/api/users', (req,res) => {
        User.findAll()
        .then((users: userTypes) => {
            res.status(200).json(users)
        })
        .catch((error : ApiException) => {
            res.status(500).json(error)
        })
    })
}