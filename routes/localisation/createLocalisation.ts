import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { localisationTypes } from "../../types/localisation";
const { Localisation } = require('../../database/connect');

/**
 * @swagger
 * tags:
 *      name: localisations
 *      description: Manage localisations
 */

/**
  * @openapi
  * /api/localisations:
  *  post:
  *      tags: [localisations]
  *      description: Create a localisation
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "address": "address", "zipCode": "zipcode", "city": "city" }
  *      responses:
  *        200:
  *          description: Create a new localisation.
  */

module.exports = (app: Application) => {
  app.post('/api/localisations', (req, res) => {
    Localisation.create(req.body).then((localisation: localisationTypes) => {
      const message: string = `localisation successfully created.`;
      res.json({ message, data: localisation });
    }).catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Could not create new localisation.`
      res.status(500).json({ message, data: error })
    })
  })
}