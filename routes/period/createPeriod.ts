import { Application } from "express";
let periods = require('../../database/mock-period')
/**
 * @swagger
 * tags:
 *      name: Period
 *      description: Manage Periods
 */

/**
  * @openapi
  * /api/period:
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
    periods.push(req.body)
    res.sendStatus(200)
  })
}