import { Application } from "express";

/**
  * @openapi
  * /api/candidates/{id}:
  *  put:
  *      tags: [Candidate]
  *      description: Update a candidate
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
  *         default: {    "firstname": "first", "lastname": "last", "birthday": "1999-01-25"}
  *      responses:
  *        200:
  *          description: Update the candidate of given id.
  */