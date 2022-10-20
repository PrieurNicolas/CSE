import { Application } from "express";
import { degreeTypes } from "../../types/degree";
import { ApiException } from "../../types/exception";
const { Degree } = require('../../database/connect')

/**
 * @openapi
 * /api/degrees/{id}:
 *   get:
 *      tags: [Degree]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique degree.
 */

module.exports = (app: Application) => {
    app.get('/api/degrees/:id', (req, res) => {
        Degree.findByPk(req.params.id)
            .then((candidates: degreeTypes) => {
                res.status(200).json(candidates)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}