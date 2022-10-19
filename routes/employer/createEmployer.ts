import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const bcrypt = require("bcrypt")
const { User, Employer, Localisation, PeriodUser, Period, DegreeUser, Degree, Role, RoleUser } = require('../../database/connect')

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

 module.exports = (app: Application) => {
  app.post('/api/employers',async (req, res) => {
    req.body.users.password = await bcrypt.hash(req.body.users.password, 10)

    User.create(req.body.users).then(async (user: any) => {

      Employer.create(req.body.employer).then((e: any) => {
        e.setUser(user)
      })

      Localisation.create(req.body.localisation).then((local: any) => {
        user.setLocalisation(local)
      })

      req.body.periods.map(async (period: any) => {
        const periodRow = await  Period.findByPk(period.id)
        user.addPeriod(periodRow, { through: PeriodUser })
      })

      const roleRow = await Role.findByPk(3)
      user.addRole(roleRow, { through: RoleUser})

    }).then((candidates: any) => {
      const message: string = `employeur successfully created.`;
      res.json({ message, data: candidates });
    })
      .catch((error: ApiException) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Could not create new employeur.`
        res.status(500).json({ message, data: error })
      })
  })
}