import { Application } from "express";

/**
  * @openapi
  * /api/periods/{id}:
  *  put:
  *      tags: [Period]
  *      description: Update a period
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
  *         default: {    "periodname": "name"}
  *      responses:
  *        200:
  *          description: Update the role of given id.
  */