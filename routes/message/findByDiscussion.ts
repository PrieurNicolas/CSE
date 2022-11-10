import { Application } from "express";
import { ApiException } from "../../types/exception";
import { messageTypes } from "../../types/message";
const { Message } = require('../../database/connect')
const { Op } = require("sequelize")
/**
 * @swagger
 * tags:
 *      name: Messages
 *      description: Manage Messages
 */


/**
 * @openapi
 * /api/messages/{currentUser}/{otherUser}:
 *   get:
 *      tags: [Messages]
 *      parameters:
 *        - name: currentUser
 *          in: path
 *          required: true
 *          type: integer
 *          default: 3
 *        - name: otherUser
 *          in: path
 *          required: true
 *          type: integer
 *          default: 1
 *      responses:
 *        200:
 *          description: Get the list of all messages from a discussion.
 */

module.exports = (app: Application) => {
    app.get('/api/messages/:currentUser/:otherUser', (req, res) => {
        Message.findAll({
            where: {
                [Op.or]: [
                    {
                        to: req.params.otherUser,
                        from: req.params.currentUser
                    },
                    {
                        to: req.params.currentUser,
                        from: req.params.otherUser
                    }           
                ]
            }
        })
            .then((roles: messageTypes) => {
                res.status(200).json(roles)
            })
            .catch((error: ApiException) => {
                res.status(500).json(error)
            })
    })
}