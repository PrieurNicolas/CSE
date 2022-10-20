import { Application } from "express";
import { employerTypes } from "../../types/employer";
import { ApiException } from "../../types/exception";
const { User, Employer, Localisation, Period, Role } = require('../../database/connect')
/**
 * @openapi
 * /api/employers/{id}:
 *   get:
 *      tags: [Employer]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique employer.
 */

module.exports = (app: Application) => {
    app.get('/api/employers/:id', (req, res) => {
        Employer.findByPk(req.params.id, {
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
            .then((employers: employerTypes) => {
                res.status(200).json(employers)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })

    })
}