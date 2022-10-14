import { Application } from "express";

/**
 * @swagger
 * tags:
 *      name: Location
 *      description: Manage location
 */

/**
  * @openapi
  * /api/locations:
  *  post:
  *      tags: [Location]
  *      description: Create a location
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "address": "address", "zipCode": "zipcode", "city": "city" }
  *      responses:
  *        200:
  *          description: Create a new location.
  */