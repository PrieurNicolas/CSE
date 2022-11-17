import { Router } from "express";
import { ValidationError } from "sequelize";
import { Degree } from "../database/connect";
import { degreeTypes } from "../types/degree";
import { ApiException } from "../types/exception";

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
degreeController.post('/', async (req, res) => {
    Degree.create(req.body).then((degree: degreeTypes) => {
        const message: string = `Diplome créer avec succes.`;
        res.json({ message, data: degree });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Echec lors de l'enregistrement du diplome.`
        res.status(500).json({ message, data: error })
    })
})

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
degreeController.delete('/:id', async (req, res) => {
    return Degree.destroy({
        where: { id: req.params.id }
    }).then((degree: degreeTypes) => {
        const message = `Le diplome avec l'identifiant n°${req.params.id} a bien été supprimé.`
        res.json({ message, data: degree })
    })
})

/**
 * @openapi
 * /api/degrees:
 *   get:
 *      tags: [Degree]
 *      responses:
 *        200:
 *          description: Get the list of all degree.
 */
degreeController.get('/', async (req, res) => {
    Degree.findAll()
        .then((candidates: degreeTypes) => {
            res.status(200).json(candidates)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

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
degreeController.get('/:id', async (req, res) => {
    Degree.findByPk(req.params.id)
        .then((candidates: degreeTypes) => {
            res.status(200).json(candidates)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

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
degreeController.put('/:id', async (req, res) => {
    Degree.update(req.body, {
        where: { id: req.params.id }
    }).then(() => {
        const message = `Diplome mis à jour`;
        res.json({ message });
    })
        .catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la mise à jour du diplome.`;
            res.status(500).json({ message, data: error });
        });
})

export { degreeController }