import { Application } from "express";
let periods = require('../../database/mock-period')

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

 module.exports = (app: Application) => {
    app.get('/api/periods/:id', (req, res) => {
        res.json(periods.find((period:any , index: number) => index == Number(req.params.id)-1))

    })
}