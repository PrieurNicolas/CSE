import { Application } from "express";
import { candidateTypes } from "../../types/candidate";
import { ApiException } from "../../types/exception";
const { User, Candidate, Localisation, Degree, Period, Role } = require('../../database/connect')

/**
 * @openapi
 * /api/candidates/{id}:
 *   get:
 *      tags: [Candidate]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique candidate.
 */

module.exports = (app: Application) => {
    app.get('/api/candidates/:id', (req, res) => {
        Candidate.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    required: false,
                    include: [
                        {
                            model: Localisation,
                            require: false
                        },
                        {
                            model: Degree,
                            require: false,
                        },
                        {
                            model: Period,
                            require: false,
                        },
                        {
                            model: Role,
                            require: false,
                        }
                    ]
                }
            ]
        })
            .then((candidates: candidateTypes) => {
                res.status(200).json(candidates)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })

    })
}