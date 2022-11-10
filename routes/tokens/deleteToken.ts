import { Application } from "express";
import { ApiException } from "../../types/exception";
import { tokenId } from "../../types/token";
const { Token } = require('../../database/connect')

/**
  * @openapi
  * /api/tokens/{id}:
  *  delete:
  *      tags: [Tokens]
  *      description: Delete a token
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a token. 
  */
module.exports = (app: Application) => {
  app.delete('/api/tokens/:id', (req, res) => {
    Token.findByPk(req.params.id).then((token: tokenId) => {
      if (token === null) {
        const message = "Requested token does not exist."
        return res.status(404).json({ message: message })
      }

      const tokenDeleted = token;
      return Token.destroy({
        where: { id: token.id }
      })
        .then(() => {
          const message = `Token successfully deleted.`
          res.json({ message, data: tokenDeleted })
        })
    })
      .catch((error: ApiException) => {
        const message = `Could not delete token.`;
        res.status(500).json({ message, data: error });
      });
  })
}