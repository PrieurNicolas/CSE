import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { roleTypes } from "../../types/role";
const { Role } = require('../../database/connect')

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
    Role.create(req.body).then((role: roleTypes) => {
      const message: string = `role successfully created.`;
      res.json({ message, data: role });
    }).catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Could not create new role.`
      res.status(500).json({ message, data: error })
    })
  })
}