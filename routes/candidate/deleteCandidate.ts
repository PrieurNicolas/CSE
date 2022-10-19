import { Application } from "express";
import { candidateId } from "../../types/candidate";
import { ApiException } from "../../types/exception";
const { User, Candidate, Localisation } = require('../../database/connect')

/**
  * @openapi
  * /api/candidates/{id}:
  *  delete:
  *      tags: [Candidate]
  *      description: Delete a candidate
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a candidate 
  */

module.exports = (app: Application) => {
  app.delete('/api/candidates/:id', (req, res) => {
    Candidate.findByPk(req.params.id).then(async (candidat: candidateId) => {
      if (candidat === null) {
        const message = "Le Candidat demandé n'existe pas. Réessayer avec un autre identifiant."
        return res.status(404).json({ message })
      }

      const candidatDeleted = candidat;

      console.log(candidatDeleted.UserId)
      let local = await User.findByPk(candidatDeleted.UserId)
      return User.destroy({
        where: { id: candidat.UserId }
      }).then(() => {
        Localisation.destroy({
          where: { id: local.LocalisationId }
        })
        const message = `Le Candidat avec l'identifiant n°${candidatDeleted.id} a bien été supprimé.`
        res.json({ message, data: candidatDeleted })
      })
    })
      .catch((error: ApiException) => {
        const message = `Le Candidat n'a pas pu être supprimé. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  })
}