import { Application } from "express";

/**
 * @swagger
 * tags:
 *      name: Roles
 *      description: Manage roles
 */

/**
  * @openapi
  * /api/roles:
  *  post:
  *      tags: [Roles]
  *      description: Create a role
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "role": "role" }
  *      responses:
  *        200:
  *          description: Create a new role.
  */

 module.exports = (app: Application) => {
    app.post('/api/roles', (req, res) => {

    })
}