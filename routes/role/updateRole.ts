import { Application } from "express";
let roles = require('../../database/mock-role')

/**
  * @openapi
  * /api/roles/{id}:
  *  put:
  *      tags: [Roles]
  *      description: Update a Role
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "role": "role"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */

 module.exports = (app: Application) => {
    app.put('/api/roles/:id', (req, res) => {
      roles[Number(req.params.id) -1].role = req.body.role
      res.json(roles[Number(req.params.id) - 1])
    })
}