import { Application } from "express";
let employers = require('../../database/mock-employer')

/**
 * @openapi
 * /api/employer/{id}:
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

 module.exports = (app: Application) => {
    app.get('/api/employers/:id', (req, res) => {
        res.json(employers.find((employer:any , index: number) => index == Number(req.params.id)-1))

    })
}