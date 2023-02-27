import { Router } from "express";
import { roleHandler } from "../inject";
const roleController = Router();

/**
 * @swagger
 * tags:
 *      name: Roles
 *      description: Manage roles
 */

/**
 * @openapi
 * /api/roles:
 *   get:
 *      tags: [Roles]
 *      responses:
 *        200:
 *          description: Get the list of all roles.
 */
roleController.get('/', roleHandler.getRoles)

/**
  * @openapi
  * /api/roles:
  *  post:
  *      tags: [Roles]
  *      description: Create a role
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "role": "role" }
  *      responses:
  *        200:
  *          description: Create a new role.
  */
roleController.post('/', roleHandler.postRole)

/**
  * @openapi
  * /api/roles/{id}:
  *  delete:
  *      tags: [Roles]
  *      description: Delete an role
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: number
  *      responses:
  *        200:
  *          description: Delete a role. 
  */
roleController.delete('/:id', roleHandler.deleteRole)

/**
 * @openapi
 * /api/roles/{id}:
 *   get:
 *      tags: [Roles]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique role.
 */
roleController.get('/:id', roleHandler.getRoleId)

/**
  * @openapi
  * /api/roles/{id}:
  *  put:
  *      tags: [Roles]
  *      description: Update a Role
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "role": "role"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */
roleController.put('/:id', roleHandler.updateRole)

export { roleController }