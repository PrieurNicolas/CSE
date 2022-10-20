import { Application } from "express";
const { Period } = require('../../database/connect')

/**
  * @openapi
  * /api/periods/{id}:
  *  delete:
  *      tags: [Period]
  *      description: Delete a period
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an period. 
  */

 module.exports = (app: Application) => {
  app.delete('/api/periods/:id', (req, res) => {
    return Period.destroy({
      where: { id: req.params.id }
    }).then((period: any) => {
      const message = `La periode avec l'identifiant n°${req.params.id} a bien été supprimé.`
      res.json({ message, data: period })
    })
  })
}