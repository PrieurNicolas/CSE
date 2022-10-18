import { Application } from "express";
let degrees = require('../../database/mock-degree')

/**
  * @openapi
  * /api/degree/{id}:
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

 module.exports = (app: Application) => {
  app.delete('/api/degrees/:id', (req, res) => {
    degrees = degrees.filter((degree:any, index:number) => index != Number(req.params.id) - 1)
    res.json(degrees);
    
  })
}