import { Router } from "express";
import { Period } from "../database/connect";
import { ApiException } from "../types/exception";
import { ValidationError } from "sequelize";
import { periodTypes } from "../types/period";
import { periodHandler } from "../inject";
const periodController = Router();


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

periodController.post('/', periodHandler.postPeriod)

/**
  * @openapi
  * /api/periods/{id}:
  *  delete:
  *      tags: [Period]
  *      description: Delete a period
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an period. 
  */
periodController.delete('/:id', periodHandler.deletePeriod)

/**
 * @openapi
 * /api/periods:
 *   get:
 *      tags: [Period]
 *      responses:
 *        200:
 *          description: Get the list of all period.
 */
periodController.get('/', periodHandler.getPeriods)

/**
 * @openapi
 * /api/periods/{id}:
 *   get:
 *      tags: [Period]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique period.
 */
periodController.get('/:id', periodHandler.getPeriodId)

/**
  * @openapi
  * /api/periods/{id}:
  *  put:
  *      tags: [Period]
  *      description: Update a period
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "periodname": "name"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */
periodController.put('/:id', periodHandler.updatePeriod)

export { periodController };