import { Router } from "express";
import { Period } from "../database/connect";
import { ApiException } from "../types/exception";
import { ValidationError } from "sequelize";
import { periodTypes } from "../types/period";
const periodController = Router();


/**
 * @swagger
 * tags:
 *      name: Period
 *      description: Manage Periods
 */

/**
  * @openapi
  * /api/periods:
  *  post:
  *      tags: [Period]
  *      description: Create a period
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "periodname": "period" }
  *      responses:
  *        200:
  *          description: Create a new period.
  */

periodController.post('/', async (req, res) => {
    Period.create(req.body).then((period: periodTypes) => {
        const message: string = `Période créé avec succes.`;
        res.json({ message, data: period });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Echec lors de la création de la période.`
        res.status(500).json({ message, data: error })
    })
})

/**
  * @openapi
  * /api/periods/{id}:
  *  delete:
  *      tags: [Period]
  *      description: Delete a period
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an period. 
  */
periodController.delete('/:id', async (req, res) => {
    return Period.destroy({
        where: { id: req.params.id }
    }).then((period: any) => {
        const message = `La periode avec l'identifiant n°${req.params.id} a bien été supprimé.`
        res.json({ message, data: period })
    })
})

/**
 * @openapi
 * /api/periods:
 *   get:
 *      tags: [Period]
 *      responses:
 *        200:
 *          description: Get the list of all period.
 */
periodController.get('/', async (req, res) => {
    Period.findAll()
        .then((periods: periodTypes) => {
            res.status(200).json(periods)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

/**
 * @openapi
 * /api/periods/{id}:
 *   get:
 *      tags: [Period]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique period.
 */
periodController.get('/:id', async (req, res) => {
    Period.findByPk(req.params.id)
        .then((period: periodTypes) => {
            res.status(200).json(period)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

/**
  * @openapi
  * /api/periods/{id}:
  *  put:
  *      tags: [Period]
  *      description: Update a period
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
  *         default: {    "periodname": "name"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */
periodController.put('/:id', async (req, res) => {
    return Period.update(req.body, {
        where: { id: req.params.id }
    }).then(() => {
        const message = `Période mise à jour avec succes`;
        res.json({ message });
    })
        .catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la mise à jour de la periode.`;
            res.status(500).json({ message, data: error });
        });
})

export { periodController };