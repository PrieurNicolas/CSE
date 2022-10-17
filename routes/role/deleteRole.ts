import { Application } from "express";
let roles = require('../../database/mock-role')

/**
  * @openapi
  * /api/roles/{id}:
  *  delete:
  *      tags: [Roles]
  *      description: Delete an role
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: number
  *      responses:
  *        200:
  *          description: Delete a role. 
  */

module.exports = (app: Application) => {
    app.delete('/api/roles/:id', (req, res) => {
      roles = roles.filter((role:any, index:number) => index != Number(req.params.id) - 1)
      res.json(roles);
      
    })
}