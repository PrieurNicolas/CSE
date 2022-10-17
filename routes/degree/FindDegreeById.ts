import { Application } from "express";
let degrees = require('../../database/mock-degree')

/**
 * @openapi
 * /api/degree/{id}:
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

 module.exports = (app: Application) => {
    app.get('/api/degrees/:id', (req, res) => {
        res.json(degrees.find((degree:any , index: number) => index == Number(req.params.id)-1))

    })
}