import { Application } from "express";
import { ApiException } from "../../types/exception";
import { periodTypes } from "../../types/period";
const { Period } = require('../../database/connect')

/**
 * @openapi
 * /api/periods/{id}:
 *   get:
 *      tags: [Period]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique period.
 */

module.exports = (app: Application) => {
    app.get('/api/periods/:id', (req, res) => {
        Period.findByPk(req.params.id)
            .then((period: periodTypes) => {
                res.status(200).json(period)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}
