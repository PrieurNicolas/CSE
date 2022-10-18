import { Application } from "express";
let periods = require('../../database/mock-period')

/**
  * @openapi
  * /api/period/{id}:
  *  delete:
  *      tags: [Period]
  *      description: Delete a period
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an period. 
  */

 module.exports = (app: Application) => {
  app.delete('/api/periods/:id', (req, res) => {
    periods = periods.filter((role:any, index:number) => index != Number(req.params.id) - 1)
    res.json(periods);
    
  })
}