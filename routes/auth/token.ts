import { Application } from "express";
import { tokenTypes } from "../../types/token";
const jwt = require('jsonwebtoken')

const { Token } = require('../../database/connect')

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
module.exports = (app: Application) => {
    app.post("/api/auth/token", (req, res) => {
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
};
