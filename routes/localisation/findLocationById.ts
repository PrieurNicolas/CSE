import { Application } from "express";

/**
 * @openapi
 * /api/locations/{id}:
 *   get:
 *      tags: [Location]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique location.
 */