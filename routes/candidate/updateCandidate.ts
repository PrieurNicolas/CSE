import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const { Candidate } = require('../../database/connect')

/**
  * @openapi
  * /api/candidates/{id}:
  *  put:
  *      tags: [Candidate]
  *      description: Update a candidate
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
  *         default: {    "firstname": "a", "lastname": "a", "birthday": "1999-01-25"}
  *      responses:
  *        200:
  *          description: Update the candidate of given id.
  */

module.exports = (app: Application) => {
  app.put('/api/candidates/:id', (req, res) => {
    Candidate.update(req.body, {
      where: { id: req.params.id }
    }).then((candidate: any) => {
      if (candidate === null) {
        const message = "Requested user does not exist."
        return res.status(404).json({ message })
      }
      const message = `Candidate successfully updated`;
      res.json({ message, data: candidate });
    }).catch((error: ApiException) => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `Could not update the candidate.`;
      res.status(500).json({ message, data: error });
    });
  })
}