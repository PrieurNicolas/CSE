import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { tokenTypes } from "../../types/token";
import { userTypes } from "../../types/user";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User, Token, Role } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Authentification
 *      description: Manage authentification
 */

/**
  * @openapi
  * /api/auth/loginAdmin:
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
    app.post("/api/auth/loginAdmin", (req, res) => {
        User.findAll({ include: [
            {
                model : Role,
                required : false
            }
        ]})
            .then(async (users: any) => {
                const admin = users.find((user: any) => user.Roles[0].role == "ADMIN" &&  user.email == req.body.email)
                // console.log(admin);
                
                let message: string = ''

                if (admin == null) {
                    message = 'No such username exists.'
                    return res.status(400).json({ userFound: false, message: message })
                }
                if (await bcrypt.compare(req.body.password, admin.password)) {
                    message = "Good"
                    const accessToken = jwt.sign({ name: admin.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
                    const refreshToken = jwt.sign({ name: admin.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1Y' })
                    Token.findAll().then((tokens: any) => {
                       const token = tokens.find((token: tokenTypes) => token.UserId == admin.id)

                       if (token == null) {
                           Token.create({
                               refreshToken: refreshToken,
                               tokenPush: refreshToken,
                               UserId: admin.id
                             })
                       } else {
                        Token.update({
                            refreshToken: refreshToken
                          }, { where: { UserId: admin.id} })
                       }
                    })
                    return res.status(200).json({ successfullLogin: true, userId: admin.id, accessToken: accessToken, refreshToken: refreshToken })
                } else {
                    message = "Wrong password for this username."
                    
                    return res.status(401).json({ successfullLogin: false, message: message })
                }
            })
            .catch((error: ApiException) => {
                const message = `Could not get users list.`
                res.status(500).json({ message: message, data: error })
            })

    })
};
