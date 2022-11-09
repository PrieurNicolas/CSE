import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { userTypes } from "../../types/user";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User, Role, RoleUser } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
  * @openapi
  * /api/usersAdmin:
  *  post:
  *      tags: [Users]
  *      description: Add an user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: body
  *         required: true
  *         type: object
  *         default: { "password":"string","email": "email@email.com", "phone": 1111111, "isActif": true}
  *      responses:
  *        200:
  *          description: Create a new user with role.
  */
module.exports = (app: Application) => {
  app.post("/api/usersAdmin", async (req, res) => {
    if (!req.body.password) return res.status(400).json({passwordRequired: true,message : 'Password is required.'})

     req.body.password = await bcrypt.hash(req.body.password, 10);
    User.create({...req.body}).then(async (user: any) => {

        const roleRow = await Role.findByPk(1)
        user.addRole(roleRow, { through: RoleUser })


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
