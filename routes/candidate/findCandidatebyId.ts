import { Application } from "express";
let candidates = require('../../database/mock-candidate')

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

 module.exports = (app: Application) => {
    app.get('/api/candidates/:id', (req, res) => {
        res.json(candidates.find((employer:any , index: number) => index == Number(req.params.id)-1))

    })
}