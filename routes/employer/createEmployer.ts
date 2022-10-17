import { Application } from "express";
let employers = require('../../database/mock-employer')

/**
 * @swagger
 * tags:
 *      name: Employer
 *      description: Manage employer
 */

/**
  * @openapi
  * /api/employer:
  *  post:
  *      tags: [Employer]
  *      description: Create an employer
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "siret": "12345676789", "structurename": "name" }
  *      responses:
  *        200:
  *          description: Create a new employer.
  */

 module.exports = (app: Application) => {
  app.post('/api/employers', (req, res) => {
    employers.push(req.body)
    res.sendStatus(200)
  })
}