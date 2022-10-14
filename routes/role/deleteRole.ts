import { Application } from "express";

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
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a role. 
  */

module.exports = (app: Application) => {
    app.delete('/api/roles/:id', (req, res) => {

    })
}