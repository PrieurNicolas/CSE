import { Application } from "express";
const { Role } = require('../../database/connect')

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
    return Role.destroy({
      where: { id: req.params.id }
    }).then((role: any) => {
      const message = `Le role avec l'identifiant n°${req.params.id} a bien été supprimé.`
      res.json({ message, data: role })
    })
  })
}