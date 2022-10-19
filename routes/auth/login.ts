import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { userTypes } from "../../types/user";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Authentification
 *      description: Manage authentification
 */

/**
  * @openapi
  * /api/auth/login:
  *  post:
  *      tags: [Authentification]
  *      description: Login
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"email": "string", "password": "string"}
  *      responses:
  *        200:
  *          description: Login. Returns tokens if successful login.
  */
module.exports = (app: Application) => {
  app.post("/api/auth/login", (req, res) => {

    User.findAll()
    .then(async (users: any) => {

        const user = users.find((user : userTypes) => user.email == req.body.email)
        let message : string = ''
        
        if (user == null) {
            message = 'No such username exists.'
            return res.status(400).json({ userFound : false, message : message })
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
            message = "Good"
            const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
            const refreshToken = jwt.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET)
            // refreshTokens.push(refreshToken)    
            return res.status(200).json({ successfullLogin : true, userId : user.id , accessToken : accessToken, refreshToken : refreshToken })
        } else {
            message = "Wrong password for this username."
            return res.status(401).json({successfullLogin : false, message : message})
        }
    })
    .catch((error : ApiException) => {
            const message = `Could not get users list.`
            res.status(500).json({message : message, data : error})
        })

    })
};
