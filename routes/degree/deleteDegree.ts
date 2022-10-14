import { Application } from "express";

/**
  * @openapi
  * /api/degree/{id}:
  *  delete:
  *      tags: [Degree]
  *      description: Delete a degree
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a degree. 
  */