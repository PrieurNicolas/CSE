import { Application } from "express";
import { employerTypes } from "../../types/employer";
import { ApiException } from "../../types/exception";
const { User, Employer, Localisation } = require('../../database/connect')

/**
 * @openapi
 * /api/employers:
 *   get:
 *      tags: [Employer]
 *      responses:
 *        200:
 *          description: Get the list of all employer.
 */
 module.exports = (app: Application) => {
    app.get('/api/employers', (req, res) => {
        Employer.findAll({ include: [
            {
                model : User,
                required : false,
                include: {
                    model : Localisation,
                    require: false
                }
            }
        ]})
            .then((employers: employerTypes) => {
                res.status(200).json(employers)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })

    })
}