import { Application } from "express";

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