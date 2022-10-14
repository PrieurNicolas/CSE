import { Application } from "express";

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