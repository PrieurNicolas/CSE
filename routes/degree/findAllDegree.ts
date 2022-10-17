import { Application } from "express";
let degrees = require('../../database/mock-degree')

/**
 * @openapi
 * /api/degree:
 *   get:
 *      tags: [Degree]
 *      responses:
 *        200:
 *          description: Get the list of all degree.
 */
 module.exports = (app: Application) => {
    app.get('/api/degrees', (req, res) => {
        res.json(degrees)

    })
}