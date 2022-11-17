import { Router } from "express";
import { Role } from "../database/connect";
import { roleTypes, roleId } from "../types/role";
import { ApiException } from "../types/exception";
import { ValidationError } from "sequelize";
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
roleController.get('/', async (req, res) => {
    Role.findAll()
        .then((roles: roleTypes) => {
            res.status(200).json(roles)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

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
roleController.post('/', async (req, res) => {
    Role.create(req.body).then((role: roleTypes) => {
        const message: string = `role crée avec succes`;
        res.json({ message, data: role });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Echec de l'insertion du nouveau role.`
        res.status(500).json({ message, data: error })
    })
})

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
roleController.delete('/:id', async (req, res) => {
    return Role.destroy({
        where: { id: req.params.id }
    }).then((role: any) => {
        const message = `Le role avec l'identifiant n°${req.params.id} a bien été supprimé.`
        res.json({ message, data: role })
    })
})

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
roleController.get('/:id', async (req, res) => {
    Role.findByPk(req.params.id)
        .then((role: roleTypes) => {
            res.status(200).json(role)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

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
roleController.put('/:id', async (req, res) => {
    return Role.update(req.body, {
        where: { id: req.params.id }
    }).then(() => {
        const message = `role mis à jour`;
        res.json({ message });
    })
        .catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Pas réussi à mettre à jour le role.`;
            res.status(500).json({ message, data: error });
        });
})

export { roleController }