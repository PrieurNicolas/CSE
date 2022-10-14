import { Application } from "express";

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