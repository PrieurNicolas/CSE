import { Application } from "express";
import { ApiException } from "../../types/exception";
import { roleTypes } from "../../types/role";
const { Role } = require('../../database/connect')

/**
 * @openapi
 * /api/roles/{id}:
 *   get:
 *      tags: [Roles]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique role.
 */

module.exports = (app: Application) => {
    app.get('/api/roles/:id', (req, res) => {
        Role.findByPk(req.params.id)
            .then((role: roleTypes) => {
                res.status(200).json(role)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}