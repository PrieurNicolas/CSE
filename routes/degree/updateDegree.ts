import { Application } from "express";

/**
  * @openapi
  * /api/degree/{id}:
  *  put:
  *      tags: [Degree]
  *      description: Update a degree
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
  *         default: {    "degreename": "degre"}
  *      responses:
  *        200:
  *          description: Update the degree of given id.
  */