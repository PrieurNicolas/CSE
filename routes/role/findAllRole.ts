import { Application } from "express";
let roles = require('../../database/mock-role')


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
        return res.json(roles)
    })
}