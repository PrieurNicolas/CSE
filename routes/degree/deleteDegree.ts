import { Application } from "express";
import { degreeTypes } from "../../types/degree";
const { Degree } = require('../../database/connect')


/**
  * @openapi
  * /api/degrees/{id}:
  *  delete:
  *      tags: [Degree]
  *      description: Delete a degree
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a degree. 
  */

module.exports = (app: Application) => {
  app.delete('/api/degrees/:id', (req, res) => {
    return Degree.destroy({
      where: { id: req.params.id }
    }).then((degree: degreeTypes) => {
      const message = `Le diplome avec l'identifiant n°${req.params.id} a bien été supprimé.`
      res.json({ message, data: degree })
    })
  })
}