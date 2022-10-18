import { Application } from "express";
import { UniqueConstraintError, ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { userTypes } from "../../types/user";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
  * @openapi
  * /api/users:
  *  post:
  *      tags: [Users]
  *      description: Add an user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "username": "string","password":"string","firstname": "string","lastname": "string","date_of_birth": "date","email": "email","biography": "string","profile_picture": null}
  *      responses:
  *        200:
  *          description: Create a new user.
  */
module.exports = (app: Application) => {
  app.post("/api/users", async (req, res) => {
    const { phone, email, isActif } = req.body

    if (!req.body.password) return res.status(400).json({passwordRequired: true,message : 'Password is required.'})

    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.create({ 
        password : hashedPassword, 
        isActif: isActif,
        email : email, 
        phone : phone
    }).then((user: userTypes) => {
        const message: string = `User successfully created.`;
        res.json({ message, data: user });
        })
        .catch((error : ApiException) => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data : error})
        }
        const message = `Could not create new user.`
        res.status(500).json({message, data : error})
    })
  });
};
