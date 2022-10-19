import { Application } from "express";
import { ApiException } from "../../types/exception";
import { localisationTypes } from "../../types/localisation";
const { Localisation } = require('../../database/connect')


/**
 * @openapi
 * /api/localisations/{id}:
 *   get:
 *      tags: [localisations]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique localisation.
 */
 module.exports = (app: Application) => {
    app.get('/api/localisations/:id', (req, res) => {
        Localisation.findByPk(req.params.id)
        .then((localisation: localisationTypes) => {
            res.status(200).json(localisation)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
    })
}