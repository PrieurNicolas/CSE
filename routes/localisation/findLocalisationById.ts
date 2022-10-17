import { Application } from "express";
let localisations = require('../../database/mock-localisation')

/**
 * @openapi
 * /api/locations/{id}:
 *   get:
 *      tags: [Location]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique location.
 */
 module.exports = (app: Application) => {
    app.get('/api/localisations/:id', (req, res) => {
        res.json(localisations.find((localisation:any , index: number) => index == Number(req.params.id)-1))

    })
}