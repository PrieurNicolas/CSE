import { Application } from "express";

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