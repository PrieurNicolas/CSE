import { Router } from "express";
import { User, Token, Role } from "../database/connect";
import { ApiException } from "../types/exception";
import { tokenTypes } from "../types/token";
import { userTypes } from "../types/user";
import bcrypt from 'bcrypt'
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
authController.post('/login', async (req, res) => {
    User.findAll()
        .then(async (users: any) => {
            const user = users.find((user: userTypes) => user.email == req.body.email)
            let message: string = ''

            if (user == null) {
                message = 'Utilisateur non trouvé.'
                return res.status(400).json({ userFound: false, message: message })
            }
            if (await bcrypt.compare(req.body.password, user.password)) {
                message = "Good"
                const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
                const refreshToken = jwt.sign({ name: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1Y' })
                Token.findAll().then((tokens: any) => {
                    const token = tokens.find((token: tokenTypes) => token.UserId == user.id)

                    if (token == null) {
                        Token.create({
                            refreshToken: refreshToken,
                            tokenPush: refreshToken,
                            UserId: user.id
                        })
                    } else {
                        Token.update({
                            refreshToken: refreshToken
                        }, { where: { UserId: user.id } })
                    }
                })
                return res.status(200).json({ successfullLogin: true, userId: user.id, accessToken: accessToken, refreshToken: refreshToken })
            } else {
                message = "Erreur du mot de passe."

                return res.status(401).json({ successfullLogin: false, message: message })
            }
        })
        .catch((error: ApiException) => {
            const message = `Pas acces a la liste des utilisateurs.`
            res.status(500).json({ message: message, data: error })
        })
})

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
authController.post('/token', async (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)

    Token.findAll()
        .then((tokens: any) => {
            let refreshTokens: any = []

            tokens.map((token: tokenTypes) => {
                refreshTokens.push(token.refreshToken)
            })

            console.log('All tokens', refreshTokens)
            if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err: Error, user: any) => {
                if (err) return res.sendStatus(403)
                const accessToken = jwt.sign({ name: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
                res.json({ accessToken: accessToken })
            })
        })
})

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

export { authController }