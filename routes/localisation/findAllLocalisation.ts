import { Application } from "express";
import { ApiException } from "../../types/exception";
import { localisationTypes } from "../../types/localisation";
const { Localisation } = require('../../database/connect')

/**
 * @openapi
 * /api/localisations:
 *   get:
 *      tags: [localisations]
 *      responses:
 *        200:
 *          description: Get the list of all localisation.
 */

module.exports = (app: Application) => {
    app.get('/api/localisations', (req, res) => {
        Localisation.findAll()
            .then((localisations: localisationTypes) => {
                res.status(200).json(localisations)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}