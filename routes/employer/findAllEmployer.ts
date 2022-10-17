import { Application } from "express";
let employers = require('../../database/mock-employer')

/**
 * @openapi
 * /api/employer:
 *   get:
 *      tags: [Employer]
 *      responses:
 *        200:
 *          description: Get the list of all employer.
 */
 module.exports = (app: Application) => {
    app.get('/api/employers', (req, res) => {
        res.json(employers)

    })
}