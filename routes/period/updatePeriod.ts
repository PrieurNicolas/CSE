import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const { Period } = require('../../database/connect')

/**
  * @openapi
  * /api/periods/{id}:
  *  put:
  *      tags: [Period]
  *      description: Update a period
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
  *         default: {    "periodname": "name"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */

module.exports = (app: Application) => {
  app.put('/api/periods/:id', (req, res) => {
    return Period.update(req.body, {
      where: { id: req.params.id }
    }).then(() => {
      const message = `period successfully updated`;
      res.json({ message });
    })
      .catch((error: ApiException) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Could not update the period.`;
        res.status(500).json({ message, data: error });
      });
  })
}