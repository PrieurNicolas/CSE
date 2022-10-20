import { Application } from "express"
import { ApiException } from "../../types/exception"
import { tokenTypes } from "../../types/token"
const { Token } = require('../../database/connect')

/**
  * @openapi
  * /api/tokens/{id}:
  *  get:
  *      tags: [Tokens]
  *      description: Get a token by id
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *      responses:
  *        200:
  *          description: Get the tokenpush of given id.
  */
module.exports = (app: Application) => {
  app.get('/api/tokens/:id', (req, res) => {
    Token.findByPk(req.params.id)
      .then((token: tokenTypes) => {
        if (token === null) {
          const message = "Requested token does not exist."
          return res.status(404).json({ message })
        }

        const message: string = 'Token found.'
        res.json({ message, data: token })
      })
      .catch((error: ApiException) => {
        const message = "Cannot find token."
        res.status(500).json({ message, data: error })
      })
  })
}