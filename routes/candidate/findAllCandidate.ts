import { Application } from "express";
import { candidateTypes } from "../../types/candidate";
import { ApiException } from "../../types/exception";
const { User, Candidate, Localisation } = require('../../database/connect');

/**
 * @openapi
 * /api/candidates:
 *   get:
 *      tags: [Candidate]
 *      responses:
 *        200:
 *          description: Get the list of all candidate.
 */

module.exports = (app: Application) => {
    app.get('/api/candidates', (req, res) => {
        Candidate.findAll({
            include: [
                {
                    model: User,
                    required: false,
                    include: {
                        model: Localisation,
                        require: false
                    }
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