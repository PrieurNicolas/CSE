import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const { Degree } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Degree
 *      description: Manage degree
 */

/**
  * @openapi
  * /api/degrees:
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
    Degree.create(req.body).then((degree: any) => {
      const message: string = `degree successfully created.`;
      res.json({ message, data: degree });
    }).catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Could not create new degree.`
      res.status(500).json({ message, data: error })
    })
  })
}