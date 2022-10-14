import { Application } from "express";

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