import { Application } from "express";
let employers = require('../../database/mock-employer')

/**
  * @openapi
  * /api/employer/{id}:
  *  delete:
  *      tags: [Employer]
  *      description: Delete an employer
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an employer. 
  */
 module.exports = (app: Application) => {
  app.delete('/api/employers/:id', (req, res) => {
    employers = employers.filter((employer:any, index:number) => index != Number(req.params.id) - 1)
    res.json(employers);
    
  })
}