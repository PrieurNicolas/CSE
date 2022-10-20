import { Application } from "express";
import { employerId } from "../../types/employer";
import { ApiException } from "../../types/exception";
const { User, Employer, Localisation } = require('../../database/connect')

/**
  * @openapi
  * /api/employers/{id}:
  *  delete:
  *      tags: [Employer]
  *      description: Delete an employer
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an employer. 
  */
module.exports = (app: Application) => {
  app.delete('/api/employers/:id', (req, res) => {
    Employer.findByPk(req.params.id).then(async (employer: employerId) => {
      if (employer === null) {
        const message = "L'employeur demandé n'existe pas. Réessayer avec un autre identifiant."
        return res.status(404).json({ message })
      }

      const employerDeleted = employer;

      let local = await User.findByPk(employerDeleted.UserId)
      return User.destroy({
        where: { id: employer.UserId }
      }).then(() => {
        Localisation.destroy({
          where: { id: local.LocalisationId }
        })
        const message = `L'employeur avec l'identifiant n°${employerDeleted.id} a bien été supprimé.`
        res.json({ message, data: employerDeleted })
      })
    })
      .catch((error: ApiException) => {
        const message = `L'employeur n'a pas pu être supprimé. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });

  })
}