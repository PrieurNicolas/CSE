import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { userTypes } from "../../types/user";
const bcrypt = require('bcrypt')

const { User } = require('../../database/connect')

/**
  * @openapi
  * /api/users/{id}:
  *  put:
  *      tags: [Users]
  *      description: Update an template
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
  *         default: { "password":"string","email": "email", "phone": 780372674}
  *      responses:
  *        200:
  *          description: Update the user of given id.
  */
module.exports = (app: Application) => {
  app.put("/api/users/:id", async (req, res) => {
    const id = req.params.id;
    const { phone, email, isActif } = req.body

    if (!req.body.password) return res.status(400).json({passwordRequired: true,message : 'Password is required.'})
    
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.update({ 
        phone : phone, 
        password : hashedPassword, 
        email : email,
        isActif: isActif
    }, {
      where: { id: id },
    })
      .then(() => {
       return User.findByPk(id).then((user: userTypes) => {
          if (user === null){
            const message = "Requested user does not exist."
            return res.status(404).json({message})
          }
            const message = `User successfully updated`;
            res.json({ message, data: user });
          })
      })
      .catch((error: ApiException) => {
        if(error instanceof ValidationError){
          return res.status(400).json({message: error.message, data : error})
        }
        const message = `Could not update the user.`;
        res.status(500).json({ message, data: error });
      });
  });
};
