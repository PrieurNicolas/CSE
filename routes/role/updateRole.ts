import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
const { Role } = require('../../database/connect')


/**
  * @openapi
  * /api/roles/{id}:
  *  put:
  *      tags: [Roles]
  *      description: Update a Role
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
  *         default: {    "role": "role"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */

 module.exports = (app: Application) => {
    app.put('/api/roles/:id', (req, res) => {
      return Role.update(req.body, {
        where: { id: req.params.id }
      }).then(() => {
             const message = `role successfully updated`;
             res.json({ message });
           })
       .catch((error: ApiException) => {
         if(error instanceof ValidationError){
           return res.status(400).json({message: error.message, data : error})
         }
         const message = `Could not update the role.`;
         res.status(500).json({ message, data: error });
       });
    })
}