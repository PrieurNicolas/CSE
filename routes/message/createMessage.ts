import { Application } from "express";
import { ValidationError } from "sequelize";
import { ApiException } from "../../types/exception";
import { messageTypes } from "../../types/message";
const { Message } = require('../../database/connect');


/**
  * @openapi
  * /api/messages:
  *  post:
  *      tags: [Messages]
  *      description: Create a messages
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: { "message": "mon message", "to": "1", "from": "3"}
  *      responses:
  *        200:
  *          description: Create a new message.
  */

 module.exports = (app: Application) => {
    app.post('/api/messages', (req, res) => {
      Message.create(req.body).then((message: messageTypes) => {
        const messa: string = `message successfully created.`;
        res.json({ messa, data: message });
      }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Could not create new message.`
        res.status(500).json({ message, data: error })
      })
    })
  }