import { Application } from "express";
import { degreeTypes } from "../../types/degree";
import { ApiException } from "../../types/exception";
const { Degree } = require('../../database/connect')

/**
 * @openapi
 * /api/degrees:
 *   get:
 *      tags: [Degree]
 *      responses:
 *        200:
 *          description: Get the list of all degree.
 */
 module.exports = (app: Application) => {
    app.get('/api/degrees', (req, res) => {
        Degree.findAll()
            .then((candidates: degreeTypes) => {
                res.status(200).json(candidates)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}