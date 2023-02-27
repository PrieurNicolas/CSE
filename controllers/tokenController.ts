import { Router } from "express";
import { tokenHandler } from "../inject";
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
tokenController.get("/", tokenHandler.getTokens)

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
tokenController.get('/:id', tokenHandler.getTokenId)

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
tokenController.delete('/:id', tokenHandler.deleteToken)

export { tokenController };