import { Application } from "express";
let periods = require('../../database/mock-period')

/**
 * @openapi
 * /api/periods:
 *   get:
 *      tags: [Period]
 *      responses:
 *        200:
 *          description: Get the list of all period.
 */

 module.exports = (app: Application) => {
    app.get('/api/periods/:id', (req, res) => {
        res.json(periods)

    })
}