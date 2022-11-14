import { Router } from "express";
import { Token } from "../database/connect";
import { tokenId, tokenTypes } from "../types/token";
import { ApiException } from "../types/exception";
const tokenController = Router();

/**
 * @swagger
 * tags:
 *      name: Tokens
 *      description: Manage tokens
 */

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
tokenController.get("/", async (req, res) => {
  Token.findAll()
    .then((tokens: tokenTypes) => {
      res.status(200).json(tokens)
    })
    .catch((error: ApiException) => {
      res.status(500).json(error)
    })
})

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
tokenController.get('/:id', async (req, res) => {
  Token.findByPk(req.params.id)
    .then((token: tokenTypes) => {
      if (token === null) {
        const message = "token n'existe pas."
        return res.status(404).json({ message })
      }

      const message: string = 'Token trouvé.'
      res.json({ message, data: token })
    })
    .catch((error: ApiException) => {
      const message = "token non trouvé."
      res.status(500).json({ message, data: error })
    })
})

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
tokenController.delete('/:id', async (req, res) => {
  Token.findByPk(req.params.id).then((token: tokenId) => {
    if (token === null) {
      const message = "token n'existe pas."
      return res.status(404).json({ message: message })
    }

    const tokenDeleted = token;
    return Token.destroy({
      where: { id: token.id }
    })
      .then(() => {
        const message = `Token supprimé avec succes.`
        res.json({ message, data: tokenDeleted })
      })
  })
    .catch((error: ApiException) => {
      const message = `Echec lors de la suppression du token.`;
      res.status(500).json({ message, data: error });
    });
})

// require('./routes/tokens/findAllTokens')(app)
// require('./routes/tokens/findTokenByPk')(app)
// require('./routes/tokens/deleteToken')(app)

export { tokenController };