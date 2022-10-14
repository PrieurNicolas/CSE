import { Application } from "express";

/**
 * @openapi
 * /api/employer/{id}:
 *   get:
 *      tags: [Employer]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique employer.
 */