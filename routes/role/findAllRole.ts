import { Application } from "express";
import { ApiException } from "../../types/exception";
import { roleTypes } from "../../types/role";
const { Role } = require('../../database/connect')



/**
 * @openapi
 * /api/roles:
 *   get:
 *      tags: [Roles]
 *      responses:
 *        200:
 *          description: Get the list of all roles.
 */

 module.exports = (app: Application) => {
    app.get('/api/roles', (req, res) => {
        Role.findAll()
            .then((roles: roleTypes) => {
                res.status(200).json(roles)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}