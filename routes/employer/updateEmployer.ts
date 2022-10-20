import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const { Employer } = require('../../database/connect')

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

module.exports = (app: Application) => {
  app.put('/api/employers/:id', (req, res) => {
    Employer.update(req.body, {
      where: { id: req.params.id }
    }).then((employer: any) => {
      if (employer === null) {
        const message = "Requested employer does not exist."
        return res.status(404).json({ message })
      }
      const message = `Employer successfully updated`;
      res.json({ message, data: employer });
    }).catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Could not update the employer.`;
      res.status(500).json({ message, data: error });
    });
  })
}