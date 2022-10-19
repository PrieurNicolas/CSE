import { Application } from "express";
const { Localisation } = require('../../database/connect')

/**
  * @openapi
  * /api/localisations/{id}:
  *  delete:
  *      tags: [localisations]
  *      description: Delete a localisation
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a localisation. 
  */

 module.exports = (app: Application) => {
  app.delete('/api/localisations/:id', (req, res) => {
    return Localisation.destroy({
      where: { id: req.params.id }
    }).then((degree: any) => {
      const message = `La localisation avec l'identifiant n°${req.params.id} a bien été supprimé.`
      res.json({ message, data: degree })
    })
  })
}