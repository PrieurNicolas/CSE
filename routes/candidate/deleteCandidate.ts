import { Application } from "express";

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