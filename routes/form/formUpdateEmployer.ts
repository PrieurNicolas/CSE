import { Application } from "express";
import { UniqueConstraintError, ValidationError } from "sequelize";
import { employerTypes } from "../../types/employer";
import { ApiException } from "../../types/exception";

const { Employer, User, Degree, Period, PeriodUser, DegreeUser, Localisation } = require("../../database/connect");

/**
  * @openapi
  * /api/form/employers/{id}:
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
  *         default: {"employer": {"siret": "123456789","structurename": "name"},"users": {"password": "string","email": "lucfate@test.com","phone": 780372674,"isActif": true,"TokenId": 1},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}] }
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
module.exports = (app: Application) => {
  app.put("/api/form/employers/:id", (req, res) => {
      console.log(req.body.employer)
    Employer.update(req.body.employer, {where : {id : req.params.id}}).then ((candidatmenfou : any) => {        
        Employer.findByPk(req.params.id).then((employer: employerTypes) => {
            User.update(req.body.users, {where : {id : employer.UserId}}).then((usermenfou : any) => {
                User.findByPk(employer.UserId).then((user: any) => {

                    PeriodUser.destroy({where: { UserId: user.id }})
                    req.body.periods?.map( async (DispoMap : any) => {
                        const DisponibiliteRow = await Period.findByPk(DispoMap.id);
                        await user.addPeriod(DisponibiliteRow, { through: PeriodUser })
                    })

                    Localisation.update(req.body.localisation, {
                        where: {id : user.LocalisationId}
                    })
                })
            })
        }) 
    })
    Employer.findByPk(req.params.id, {
        include : [
            {
                model : User,
                required : false,
                include: [
                    {
                        model : Period,
                        required : false
                    }
                ]
            }
        ]
    }).then((candidats: any) => {
      const message : string = 'Le candidat à bien été mis à jour'
      res.json({message, data: candidats})
    })
    .catch((error : ApiException) => {
      if(error instanceof ValidationError){
        return res.status(400).json({message: error.message, data : error})
      }
      const message = `Le Candidat n'a pas pu être ajouté. Réessayer dans quelques instants.`
      res.status(500).json({message, data : error})
    })
  });
};