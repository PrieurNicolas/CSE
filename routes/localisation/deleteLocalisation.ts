import { Application } from "express";
let localisations = require('../../database/mock-localisation')

/**
  * @openapi
  * /api/locations/{id}:
  *  delete:
  *      tags: [Location]
  *      description: Delete a location
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a location. 
  */

 module.exports = (app: Application) => {
  app.delete('/api/localisations/:id', (req, res) => {
    localisations = localisations.filter((localisation:any, index:number) => index != Number(req.params.id) - 1)
    res.json(localisations);
    
  })
}