import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const { Localisation } = require('../../database/connect')

/**
  * @openapi
  * /api/localisations/{id}:
  *  put:
  *      tags: [localisations]
  *      description: Update a localisations
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
  *         default: { "address": "address", "zipCode": "zipcode", "city": "city"}
  *      responses:
  *        200:
  *          description: Update the localisation of given id.
  */

 module.exports = (app: Application) => {
  app.put('/api/localisations/:id', (req, res) => {
    return Localisation.update(req.body, {
      where: { id: req.params.id }
    }).then(() => {
           const message = `localisation successfully updated`;
           res.json({ message });
         })
     .catch((error: ApiException) => {
       if(error instanceof ValidationError){
         return res.status(400).json({message: error.message, data : error})
       }
       const message = `Could not update the localisation.`;
       res.status(500).json({ message, data: error });
     });
  })
}