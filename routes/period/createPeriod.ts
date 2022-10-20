import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { periodTypes } from "../../types/period";
const { Period } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Period
 *      description: Manage Periods
 */

/**
  * @openapi
  * /api/periods:
  *  post:
  *      tags: [Period]
  *      description: Create a period
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "periodname": "period" }
  *      responses:
  *        200:
  *          description: Create a new period.
  */

module.exports = (app: Application) => {
  app.post('/api/periods', (req, res) => {
    Period.create(req.body).then((period: periodTypes) => {
      const message: string = `period successfully created.`;
      res.json({ message, data: period });
    }).catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Could not create new period.`
      res.status(500).json({ message, data: error })
    })
  })
}