import { Application } from "express";

/**
 * @swagger
 * tags:
 *      name: Candidate
 *      description: Manage candidate
 */

/**
  * @openapi
  * /api/candidates:
  *  post:
  *      tags: [Candidate]
  *      description: Create a candidate
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "firstname": "first", "lastname": "last", "birthday": "1999-01-01" }
  *      responses:
  *        200:
  *          description: Create a new candidate.
  */