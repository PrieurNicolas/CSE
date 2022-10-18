import { Application } from "express";
let candidates = require('../../database/mock-candidate')

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

 module.exports = (app: Application) => {
  app.delete('/api/candidates/:id', (req, res) => {
    candidates = candidates.filter((employer:any, index:number) => index != Number(req.params.id) - 1)
    res.json(candidates);
    
  })
}