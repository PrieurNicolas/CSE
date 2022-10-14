import { Application } from "express";
import { UniqueConstraintError, ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { tokenTypes } from "../../types/token";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Token } = require('../../database/connect')

/**
 * @swagger
 * tags:
 *      name: Tokens
 *      description: Manage tokens
 */

/**
  * @openapi
  * /api/tokens:
  *  post:
  *      tags: [Tokens]
  *      description: Add an token
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "refreshToken": "string"}
  *      responses:
  *        200:
  *          description: Create a new token.
  */
module.exports = (app: Application) => {
  app.post("/api/tokens", async (req, res) => {
    const { refreshToken } = req.body
    Token.create({ 
        refreshToken : refreshToken, 
    }).then((token: tokenTypes) => {
        const message: string = `Refresh token successfully created.`;
        res.json({ message, data: token });
        })
        .catch((error : ApiException) => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data : error})
        }
        const message = `Could not create new refresh token.`
        res.status(500).json({message, data : error})
    })
  });
};
