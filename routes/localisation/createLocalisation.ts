import { Application } from "express";
let localisations = require('../../database/mock-localisation')

/**
 * @swagger
 * tags:
 *      name: Location
 *      description: Manage location
 */

/**
  * @openapi
  * /api/locations:
  *  post:
  *      tags: [Location]
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
    localisations.push(req.body)
    res.sendStatus(200)
  })
}