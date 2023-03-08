import { Router } from "express";
import { User, Token, Role } from "../database/connect";
import { ApiException } from "../types/exception";
import { tokenTypes } from "../types/token";
import bcrypt from 'bcrypt'
import { authHandler } from "../inject";
const jwt = require('jsonwebtoken')

const authController = Router();

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
authController.post('/login', authHandler.login)

/**
  * @openapi
  * /api/auth/token:
  *  post:
  *      tags: [Authentification]
  *      description: Token
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"token": "string"}
  *      responses:
  *        200:
  *          description: Token. Refresh tokens.
  */
authController.post('/token', authHandler.token)

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
 authController.post('/loginAdmin', async (req, res) => {
    User.findAll({ include: [
        {
            model : Role,
            required : false
        }
    ]})
        .then(async (users: any) => {
            const admin = users.find((user: any) => user.Roles[0].role == "ADMIN" &&  user.email == req.body.email)
            
            let message: string = ''

            if (admin == null) {
                message = 'Echec utilisateur non admin.'
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
                message = "Echec Mot de passe incorrect"
                
                return res.status(401).json({ successfullLogin: false, message: message })
            }
        })
        .catch((error: ApiException) => {
            const message = `Echec: liste d'utilisateur non disponible.`
            res.status(500).json({ message: message, data: error })
        })
 })

 authController.post('/forgetPassword', async (req, res) => {
    console.log(req.body.email)
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.email!,
            pass: process.env.emailpsw,
        },
        secure: true,

    });

    const user: any = []
    // await service.findUser(req.body.email)

    if (user) {
        const refresh_token = jwt.sign({ id: user[0].user_id, user_nom: user[0].user_nom }, process.env.JWT_TOKEN, { algorithm: "HS256", expiresIn: '15min' });
        const link = `"http://localhost:3000/reset?token=" + ${refresh_token}`

        const mailData: { from: string, to: string, subject: string, text: string, html: string } = {
            from: process.env.email!,
            to: req.body.email,
            subject: 'Forgot password',
            text: 'Forgot password',
            html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                link + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        }
        await transporter.sendMail(mailData, function (err: any, info: any) {
            if (err)
                res.sendStatus(500)
            else
                res.sendStatus(200)
        })

    } else {
        res.status(401).json("email incorrect")
    }


})

export { authController }