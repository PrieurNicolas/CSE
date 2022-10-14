import { Application } from "express";

/**
 * @openapi
 * /api/degree/{id}:
 *   get:
 *      tags: [Degree]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique degree.
 */