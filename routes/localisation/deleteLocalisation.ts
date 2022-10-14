import { Application } from "express";

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