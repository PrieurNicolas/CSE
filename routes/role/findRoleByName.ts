import { Application } from "express";

/**
 * @openapi
 * /api/roles/{role}:
 *   get:
 *      tags: [Roles]
 *      parameters:
 *       - name: role
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique role.
 */

module.exports = (app: Application) => {
    app.get('/api/roles/:role', (req, res) => {

    })
}