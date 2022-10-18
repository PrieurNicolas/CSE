import { Application } from "express";
let roles = require('../../database/mock-role')

/**
 * @openapi
 * /api/roles/{role}:
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
        res.json(roles.find((role:any , index: number) => index == Number(req.params.id)-1))

    })
}