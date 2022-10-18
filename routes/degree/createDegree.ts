import { Application } from "express";
let degrees = require('../../database/mock-degree')

/**
 * @swagger
 * tags:
 *      name: Degree
 *      description: Manage degree
 */

/**
  * @openapi
  * /api/degree:
  *  post:
  *      tags: [Degree]
  *      description: Create a degree
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "degreename": "degre" }
  *      responses:
  *        200:
  *          description: Create a new degree.
  */

 module.exports = (app: Application) => {
  app.post('/api/degrees', (req, res) => {
    degrees.push(req.body)
    res.sendStatus(200)
  })
}