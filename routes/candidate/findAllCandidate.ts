import { Application } from "express";
let candidates = require('../../database/mock-candidate')

/**
 * @openapi
 * /api/candidates:
 *   get:
 *      tags: [Candidate]
 *      responses:
 *        200:
 *          description: Get the list of all candidate.
 */

 module.exports = (app: Application) => {
    app.get('/api/candidates', (req, res) => {
        res.json(candidates)

    })
}