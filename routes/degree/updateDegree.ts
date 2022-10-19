import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
let degrees = require('../../database/mock-degree')
const { Degree } = require('../../database/connect')

/**
  * @openapi
  * /api/degrees/{id}:
  *  put:
  *      tags: [Degree]
  *      description: Update a degree
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
  *         default: {    "degreename": "degre"}
  *      responses:
  *        200:
  *          description: Update the degree of given id.
  */

 module.exports = (app: Application) => {
  app.put('/api/degrees/:id', (req, res) => {
    Degree.update(req.body, {
      where: { id: req.params.id }
    }).then(() => {
           const message = `degree successfully updated`;
           res.json({ message });
         })
     .catch((error: ApiException) => {
       if(error instanceof ValidationError){
         return res.status(400).json({message: error.message, data : error})
       }
       const message = `Could not update the degree.`;
       res.status(500).json({ message, data: error });
     });
  })
}