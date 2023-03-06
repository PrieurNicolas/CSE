import { Router } from "express";
import { ValidationError } from "sequelize";
import { Employer, Localisation, Period, PeriodUser, Role, RoleUser, User } from "../database/connect";
import { employerId, employerTypes } from "../types/employer";
import { ApiException } from "../types/exception";
import bcrypt from 'bcrypt'
import { employerHandler } from "../inject";

const employerController = Router();

/**
 * @swagger
 * tags:
 *      name: Employer
 *      description: Manage employer
 */

/**
  * @openapi
  * /api/employers:
  *  post:
  *      tags: [Employer]
  *      description: Create an employer
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"employer": {"siret": "123456789","structurename": "name"},"users": {"password": "string", "passwordconf": "string","email": "lucfate@test.com","phone": 777777,"isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}] }
  *      responses:
  *        200:
  *          description: Create a new employer.
  */
employerController.post('/', employerHandler.postEmployer)

/**
  * @openapi
  * /api/employers/{id}:
  *  delete:
  *      tags: [Employer]
  *      description: Delete an employer
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an employer. 
  */

employerController.delete('/:id', employerHandler.deleteEmployer)

/**
* @openapi
* /api/employers:
*   get:
*      tags: [Employer]
*      responses:
*        200:
*          description: Get the list of all employer.
*/
employerController.get('/', employerHandler.getEmployers)

/**
 * @openapi
 * /api/employers/{id}:
 *   get:
 *      tags: [Employer]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique employer.
 */
employerController.get('/:id', employerHandler.getEmployerId)

// /**
//   * @openapi
//   * /api/employers/{id}:
//   *  put:
//   *      tags: [Employer]
//   *      description: Update an employer
//   *      consumes:
//   *       - application/json
//   *      parameters:
//   *       - name: id
//   *         in: path
//   *         required: true
//   *         type: integer
//   *         default: 1
//   *       - name: JSON
//   *         in: body
//   *         required: true
//   *         type: object
//   *         default: {    "siret": "12345676789", "structurename": "name"}
//   *      responses:
//   *        200:
//   *          description: Update the employer of given id.
//   */
// employerController.put('/:id', async (req, res) => {
//   Employer.update(req.body, {
//     where: { id: req.params.id }
//   }).then((employer: any) => {
//     if (employer === null) {
//       const message = "L'employeur n'existe pas."
//       return res.status(404).json({ message })
//     }
//     const message = `Employeur mise à jour`;
//     res.json({ message, data: employer });
//   }).catch((error: ApiException) => {
//     if (error instanceof ValidationError) {
//       return res.status(400).json({ message: error.message, data: error })
//     }
//     const message = `Echec lors de la mise à jour de l'employeur.`;
//     res.status(500).json({ message, data: error });
//   });
// })

/**
  * @openapi
  * /api/employers/form/{id}:
  *  put:
  *      tags: [Employer]
  *      description: Crée un candidat
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default : 1
  *       - name: JSON
  *         in: body
  *         required: true  
  *         type: object
  *         default: {"employer": {"siret": "123456789","structurename": "name"},"users": {"password": "string", "passwordconf": "string","email": "lucfate@test.com","phone": 45678912,"isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}] }
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
employerController.put('/form/:id', employerHandler.updateEmployer)


export { employerController };