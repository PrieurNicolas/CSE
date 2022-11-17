import { Router } from "express";
import { ValidationError } from "sequelize";
import { Employer, Localisation, Period, PeriodUser, Role, RoleUser, User } from "../database/connect";
import { employerId, employerTypes } from "../types/employer";
import { ApiException } from "../types/exception";
import bcrypt from 'bcrypt'

const employerController = Router();

/**
 * @swagger
 * tags:
 *      name: Employer
 *      description: Manage employer
 */

/**
  * @openapi
  * /api/employers:
  *  post:
  *      tags: [Employer]
  *      description: Create an employer
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"employer": {"siret": "123456789","structurename": "name"},"users": {"password": "string","email": "lucfate@test.com","phone": 780372674,"isActif": true,"TokenId": 1},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}] }
  *      responses:
  *        200:
  *          description: Create a new employer.
  */
employerController.post('/', async (req, res) => {
  if (!req.body.password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })
  req.body.users.password = await bcrypt.hash(req.body.users.password, 10)

  User.create(req.body.users).then(async (user: any) => {

    Employer.create(req.body.employer).then((e: any) => {
      e.setUser(user)
    })

    Localisation.create(req.body.localisation).then((local: any) => {
      user.setLocalisation(local)
    })

    req.body.periods.map(async (period: any) => {
      const periodRow = await Period.findByPk(period.id)
      user.addPeriod(periodRow, { through: PeriodUser })
    })

    const roleRow = await Role.findByPk(3)
    user.addRole(roleRow, { through: RoleUser })

  }).then((employer: employerTypes) => {
    const message: string = `employeur créé avec succes.`;
    res.json({ message, data: employer });
  })
    .catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Echec lors de la création de l'employeur.`
      res.status(500).json({ message, data: error })
    })
})

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

employerController.delete('/:id', async (req, res) => {
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

/**
* @openapi
* /api/employers:
*   get:
*      tags: [Employer]
*      responses:
*        200:
*          description: Get the list of all employer.
*/
employerController.get('/', async (req, res) => {
  Employer.findAll({
    include: [
      {
        model: User,
        required: false,
        include: {
          model: Localisation,
          require: false
        }
      }
    ]
  })
    .then((employers: employerTypes) => {
      res.status(200).json(employers)
    })
    .catch((error: ApiException) => {
      res.status(500).json(error)
    })
})

/**
 * @openapi
 * /api/employers/{id}:
 *   get:
 *      tags: [Employer]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique employer.
 */
employerController.get('/:id', async (req, res) => {
  Employer.findByPk(req.params.id, {
    include: [
      {
        model: User,
        required: false,
        include: [
          {
            model: Localisation,
            require: false
          },
          {
            model: Period,
            require: false,
          },
          {
            model: Role,
            require: false,
          }
        ]
      }
    ]
  })
    .then((employers: employerTypes) => {
      res.status(200).json(employers)
    })
    .catch((error: ApiException) => {
      res.status(500).json(error)
    })
})

/**
  * @openapi
  * /api/employers/{id}:
  *  put:
  *      tags: [Employer]
  *      description: Update an employer
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "siret": "12345676789", "structurename": "name"}
  *      responses:
  *        200:
  *          description: Update the employer of given id.
  */
employerController.put('/:id', async (req, res) => {
  Employer.update(req.body, {
    where: { id: req.params.id }
  }).then((employer: any) => {
    if (employer === null) {
      const message = "L'employeur n'existe pas."
      return res.status(404).json({ message })
    }
    const message = `Employeur mise à jour`;
    res.json({ message, data: employer });
  }).catch((error: ApiException) => {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, data: error })
    }
    const message = `Echec lors de la mise à jour de l'employeur.`;
    res.status(500).json({ message, data: error });
  });
})

/**
  * @openapi
  * /api/employers/form/{id}:
  *  put:
  *      tags: [Employer]
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
  *         default: {"employer": {"siret": "123456789","structurename": "name"},"users": {"password": "string","email": "lucfate@test.com","phone": 780372674,"isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}] }
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
employerController.put('/form/:id', async (req, res) => {
  Employer.update(req.body.employer, { where: { id: req.params.id } }).then(() => {
    Employer.findByPk(req.params.id).then((employer: employerTypes) => {
      User.update(req.body.users, { where: { id: employer.UserId } }).then(() => {
        User.findByPk(employer.UserId).then((user: any) => {

          PeriodUser.destroy({ where: { UserId: user.id } })
          req.body.periods?.map(async (DispoMap: any) => {
            const DisponibiliteRow = await Period.findByPk(DispoMap.id);
            await user.addPeriod(DisponibiliteRow, { through: PeriodUser })
          })

          Localisation.update(req.body.localisation, {
            where: { id: user.LocalisationId }
          })
        })
      })
    })
  })
  Employer.findByPk(req.params.id, {
    include: [
      {
        model: User,
        required: false,
        include: [
          {
            model: Period,
            required: false
          }
        ]
      }
    ]
  }).then((employer: any) => {
    const message: string = 'L\'employeur à bien été mis à jour'
    res.json({ message, data: employer })
  })
    .catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `L\'employeur n'a pas pu être ajouté. Réessayer dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
})


export { employerController };