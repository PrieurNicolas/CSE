import { Router } from "express";
import { degreeHandler } from "../inject";

const degreeController = Router();


/**
 * @swagger
 * tags:
 *      name: Degree
 *      description: Manage degree
 */

/**
  * @openapi
  * /api/degrees:
  *  post:
  *      tags: [Degree]
  *      description: Create a degree
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "degreename": "degre" }
  *      responses:
  *        200:
  *          description: Create a new degree.
  */
degreeController.post('/', degreeHandler.postDegree)

/**
  * @openapi
  * /api/degrees/{id}:
  *  delete:
  *      tags: [Degree]
  *      description: Delete a degree
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a degree. 
  */
degreeController.delete('/:id', degreeHandler.deleteDegree)

/**
 * @openapi
 * /api/degrees:
 *   get:
 *      tags: [Degree]
 *      responses:
 *        200:
 *          description: Get the list of all degree.
 */
degreeController.get('/', degreeHandler.getDegrees)

/**
 * @openapi
 * /api/degrees/{id}:
 *   get:
 *      tags: [Degree]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique degree.
 */
degreeController.get('/:id', degreeHandler.getDegreeId)

/**
  * @openapi
  * /api/degrees/{id}:
  *  put:
  *      tags: [Degree]
  *      description: Update a degree
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
  *         default: {    "degreename": "degre"}
  *      responses:
  *        200:
  *          description: Update the degree of given id.
  */
degreeController.put('/:id', degreeHandler.updateDegree)

export { degreeController }