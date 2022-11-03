import { Application } from "express";
import { ValidationError } from "sequelize";
import { candidateTypes } from "../../types/candidate";
import { ApiException } from "../../types/exception";

const { Candidate, User, Degree, Period, PeriodUser, DegreeUser, Localisation } = require("../../database/connect");

/**
 * @swagger
 * tags:
 *      name: Form
 *      description: Manage les routes Candidat
 */

/**
  * @openapi
  * /api/form/candidat/{id}:
  *  put:
  *      tags: [Form]
  *      description: Crée un candidat
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default : 1
  *       - name: JSON
  *         in: body
  *         required: true  
  *         type: object
  *         default: {"candidate": {"firstname": "luc","lastname": "fate","birthday": "1999-01-01"},"users": {"password": "string","email": "lucfate@test.com","phone": 780372674,"isActif": true,"TokenId": 1},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}],"degrees": [{"id":1}]}
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
module.exports = (app: Application) => {
    app.put("/api/form/candidat/:id", (req, res) => {
        // console.log(req.body.candidate)
        Candidate.update(req.body.candidate, { where: { id: req.params.id } }).then(() => {
            Candidate.findByPk(req.params.id).then((candidat: candidateTypes) => {
                User.update(req.body.users, { where: { id: candidat.UserId } }).then(() => {
                    User.findByPk(candidat.UserId).then((user: any) => {

                        PeriodUser.destroy({ where: { UserId: user.id } })
                        req.body.periods?.map(async (DispoMap: any) => {
                            const DisponibiliteRow = await Period.findByPk(DispoMap.id);
                            await user.addPeriod(DisponibiliteRow, { through: PeriodUser })
                        })

                        DegreeUser.destroy({ where: { UserId: user.id } })
                        req.body.degrees?.map(async (DiploMap: any) => {
                            const DiplomeRow = await Degree.findByPk(DiploMap.id);
                            await user.addDegree(DiplomeRow, { through: DegreeUser })
                        })

                        Localisation.update(req.body.localisation, {
                            where: { id: user.LocalisationId }
                        })
                    })
                })
            })
        })
        Candidate.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    required: false,
                    include: [
                        {
                            model: Degree,
                            required: false
                        },
                        {
                            model: Period,
                            required: false
                        }
                    ]
                }
            ]
        }).then((candidats: any) => {
            const message: string = 'Le candidat à bien été mis à jour'
            res.json({ message, data: candidats })
        })
            .catch((error: ApiException) => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = `Le Candidat n'a pas pu être ajouté. Réessayer dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    });
};