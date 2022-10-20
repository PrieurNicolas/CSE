import { Application } from "express";
import { ApiException } from "../../types/exception";
import { periodTypes } from "../../types/period";
const { Period } = require('../../database/connect')

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
    app.get('/api/periods', (req, res) => {
        Period.findAll()
            .then((periods: periodTypes) => {
                res.status(200).json(periods)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}