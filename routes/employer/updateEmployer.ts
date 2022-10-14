import { Application } from "express";

/**
  * @openapi
  * /api/employer/{id}:
  *  put:
  *      tags: [Employer]
  *      description: Update an employer
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
  *         default: {    "siret": "12345676789", "structurename": "name"}
  *      responses:
  *        200:
  *          description: Update the employer of given id.
  */