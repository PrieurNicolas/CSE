import { Application } from "express";
let localisations = require('../../database/mock-localisation')

/**
  * @openapi
  * /api/locations/{id}:
  *  put:
  *      tags: [Location]
  *      description: Update a location
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "address": "address", "zipCode": "zipcode", "city": "city"}
  *      responses:
  *        200:
  *          description: Update the location of given id.
  */

 module.exports = (app: Application) => {
  app.put('/api/localisations/:id', (req, res) => {
    localisations[Number(req.params.id) -1] = req.body
    res.json(periods[Number(req.params.id) - 1])
  })
}