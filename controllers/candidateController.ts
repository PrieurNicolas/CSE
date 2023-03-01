import { Router } from "express";
import { candidateHandler } from "../inject";

const candidateController = Router();

/**
 * @swagger
 * tags:
 *      name: Candidate
 *      description: Manage candidate
 */

/**
  * @openapi
  * /api/candidates:
  *  post:
  *      tags: [Candidate]
  *      description: Create a candidate
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"candidate": {"firstname": "luc","lastname": "fate","birthday": "1999-01-01", "wantToBe": "animateur"},"users": {"password": "string", "passwordconf": "string","email": "lucfate@test.com","phone": "2345676","isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}],"degrees": [{"id":1}]}
  *      responses:
  *        200:
  *          description: Create a new candidate.
  */
candidateController.post('/', candidateHandler.postCandidate)

/**
  * @openapi
  * /api/candidates/{id}:
  *  delete:
  *      tags: [Candidate]
  *      description: Delete a candidate
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a candidate 
  */
candidateController.delete('/:id', candidateHandler.deleteCandidate)

/**
 * @openapi
 * /api/candidates:
 *   get:
 *      tags: [Candidate]
 *      responses:
 *        200:
 *          description: Get the list of all candidate.
 */
candidateController.get('/', candidateHandler.getCandidates)

/**
 * @openapi
 * /api/candidates/{id}:
 *   get:
 *      tags: [Candidate]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique candidate.
 */
candidateController.get('/:id', candidateHandler.getCandidateId)

// /**
//   * @openapi
//   * /api/candidates/{id}:
//   *  put:
//   *      tags: [Candidate]
//   *      description: Update a candidate
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
//   *         default: {    "firstname": "a", "lastname": "a", "birthday": "1999-01-25"}
//   *      responses:
//   *        200:
//   *          description: Update the candidate of given id.
//   */
// candidateController.put('/:id', async (req, res) => {
//     Candidate.update(req.body, {
//         where: { id: req.params.id }
//     }).then((candidate: any) => {
//         if (candidate === null) {
//             const message = "Requested user does not exist."
//             return res.status(404).json({ message })
//         }
//         const message = `Candidate successfully updated`;
//         res.json({ message, data: candidate });
//     }).catch((error: ApiException) => {
//         if (error instanceof ValidationError) {
//             return res.status(400).json({ message: error.message, data: error })
//         }
//         const message = `Could not update the candidate.`;
//         res.status(500).json({ message, data: error });
//     });
// })

/**
  * @openapi
  * /api/candidates/form/{id}:
  *  put:
  *      tags: [Candidate]
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
  *         default: {"candidate": {"firstname": "luc","lastname": "fate","birthday": "1999-01-01"},"users": {"password": "string", "passwordconf": "string","email": "lucfate@test.com","phone": 456789,"isActif": true},"localisation": {"address": "address","zipCode": 62176,"city": "city"},"periods": [{    "id":1},{    "id":3}],"degrees": [{"id":1}]}
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
candidateController.put('/form/:id', candidateHandler.updateCandidate)


export { candidateController }