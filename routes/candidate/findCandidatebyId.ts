import { Application } from "express";

/**
 * @openapi
 * /api/candidates/{id}:
 *   get:
 *      tags: [Candidate]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique candidate.
 */