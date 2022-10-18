import { Application } from "express";
let localisations = require('../../database/mock-localisation')

/**
 * @openapi
 * /api/locations:
 *   get:
 *      tags: [Location]
 *      responses:
 *        200:
 *          description: Get the list of all localisation.
 */

 module.exports = (app: Application) => {
    app.get('/api/localisations', (req, res) => {
        res.json(localisations)

    })
}