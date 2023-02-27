import { Router } from "express";
import { localisationHandler } from "../inject";

const localisationController = Router();

/**
 * @swagger
 * tags:
 *      name: localisations
 *      description: Manage localisations
 */

/**
  * @openapi
  * /api/localisations:
  *  post:
  *      tags: [localisations]
  *      description: Create a localisation
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "address": "address", "zipCode": "zipcode", "city": "city" }
  *      responses:
  *        200:
  *          description: Create a new localisation.
  */
localisationController.post('/', localisationHandler.postLocalisation)

/**
  * @openapi
  * /api/localisations/{id}:
  *  delete:
  *      tags: [localisations]
  *      description: Delete a localisation
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a localisation. 
  */
localisationController.delete('/:id', localisationHandler.deleteLocalisation)

/**
 * @openapi
 * /api/localisations:
 *   get:
 *      tags: [localisations]
 *      responses:
 *        200:
 *          description: Get the list of all localisation.
 */
localisationController.get('/', localisationHandler.getLocalisations)

/**
 * @openapi
 * /api/localisations/{id}:
 *   get:
 *      tags: [localisations]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique localisation.
 */
localisationController.get('/:id', localisationHandler.getLocalisationId)

/**
  * @openapi
  * /api/localisations/{id}:
  *  put:
  *      tags: [localisations]
  *      description: Update a localisations
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
  *         default: { "address": "address", "zipCode": "zipcode", "city": "city"}
  *      responses:
  *        200:
  *          description: Update the localisation of given id.
  */
localisationController.put('/:id', localisationHandler.updateLocalisation)

export { localisationController }