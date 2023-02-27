import { Router } from "express";
import authenticateToken from "../middleware";
import { adminHandler } from "../inject";

const adminController = Router();



/**
  * @openapi
  * /api/users/admin:
  *  post:
  *      tags: [Users]
  *      description: Add an user
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: body
  *         required: true
  *         type: object
  *         default: { "password":"string","email": "email@email.com", "phone": 1111111, "isActif": true}
  *      responses:
  *        200:
  *          description: Create a new user with role.
  */
adminController.post('/', adminHandler.postAdmin)

/**
 * @openapi
 * /api/users/admin/all:
 *   get:
 *      tags: [Users]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Get the list of all admin users.
 */
adminController.get('/all',adminHandler.getAdmins)


export { adminController };