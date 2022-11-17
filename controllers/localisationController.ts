import { Router } from "express";
import { Localisation } from "../database/connect";
import { localisationTypes } from "../types/localisation";
import { ValidationError } from "sequelize";
import { ApiException } from "../types/exception";

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
localisationController.post('/', async (req, res) => {
    Localisation.create(req.body).then((localisation: localisationTypes) => {
        const message: string = `Localisation créé avec succes.`;
        res.json({ message, data: localisation });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Echec lors de la création d'une localisation.`
        res.status(500).json({ message, data: error })
    })
})

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
localisationController.delete('/:id', async (req, res) => {
    return Localisation.destroy({
        where: { id: req.params.id }
    }).then((localisation: any) => {
        const message = `La localisation avec l'identifiant n°${req.params.id} a bien été supprimé.`
        res.json({ message, data: localisation })
    })
})

/**
 * @openapi
 * /api/localisations:
 *   get:
 *      tags: [localisations]
 *      responses:
 *        200:
 *          description: Get the list of all localisation.
 */
localisationController.get('/', async (req, res) => {
    Localisation.findAll()
        .then((localisations: localisationTypes) => {
            res.status(200).json(localisations)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

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
localisationController.get('/:id', async (req, res) => {
    Localisation.findByPk(req.params.id)
        .then((localisation: localisationTypes) => {
            res.status(200).json(localisation)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

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
localisationController.put('/:id', async (req, res) => {
    return Localisation.update(req.body, {
        where: { id: req.params.id }
    }).then(() => {
        const message = `Localisation mise à jour avec succes`;
        res.json({ message });
    })
        .catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la mise à jour de la localisation.`;
            res.status(500).json({ message, data: error });
        });
})

export { localisationController }