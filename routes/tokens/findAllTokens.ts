import { Application } from "express"
import { ApiException } from "../../types/exception"
import { tokenTypes } from "../../types/token"
const { Token } = require('../../database/connect')

/**
 * @openapi
 * /api/tokens:
 *   get:
 *      tags: [Tokens]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all tokenpush.
 */
module.exports = (app: Application) => {
    app.get('/api/tokens', (req, res) => {
        Token.findAll()
            .then((tokens: tokenTypes) => {
                res.status(200).json(tokens)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}