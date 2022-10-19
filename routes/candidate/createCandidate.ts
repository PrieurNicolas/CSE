import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const bcrypt = require("bcrypt")
const { User, Candidate, Localisation, PeriodUser, Period, DegreeUser, Degree, Role, RoleUser } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Candidate
 *      description: Manage candidate
 */

/**
  * @openapi
  * /api/candidates:
  *  post:
  *      tags: [Candidate]
  *      description: Create a candidate
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"candidate": {"firstname": "luc","lastname": "fate","birthday": "1999-01-01"},"users": {"password": "string","email": "lucfate@test.com","phone": 780372674,"isActif": true,"TokenId": 1},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}],"degrees": [{"id":1}]}
  *      responses:
  *        200:
  *          description: Create a new candidate.
  */

module.exports = (app: Application) => {
  app.post('/api/candidates',async (req, res) => {
    console.log(req.body.candidate)
    req.body.users.password = await bcrypt.hash(req.body.users.password, 10)

    User.create(req.body.users).then(async (user: any) => {

      Candidate.create(req.body.candidate).then((c: any) => {
        c.setUser(user)
      })

      Localisation.create(req.body.localisation).then((local: any) => {
        user.setLocalisation(local)
      })

      req.body.periods.map(async (period: any) => {
        const periodRow = await  Period.findByPk(period.id)
        user.addPeriod(periodRow, { through: PeriodUser })
      })

      req.body.degrees.map(async (degree: any) => {
        const degreeRow = await  Degree.findByPk(degree.id)
        user.addDegree(degreeRow, { through: DegreeUser })
      })

      const roleRow = await Role.findByPk(2)
      user.addRole(roleRow, { through: RoleUser})

    }).then((candidates: any) => {
      const message: string = `candidate successfully created.`;
      res.json({ message, data: candidates });
    })
      .catch((error: ApiException) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Could not create new candidate.`
        res.status(500).json({ message, data: error })
      })
  })
}