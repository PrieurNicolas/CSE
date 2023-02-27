import 'dotenv/config'
import { ApiException } from './types/exception'
import { Response, Request, NextFunction } from 'express';
import { userTypes } from "./types/user";
import { apiController } from './controllers/apiController';
import { initDb } from './database/connect';
import helmet from 'helmet';
import cors from 'cors';
const express = require("express")
require("./socket")
const app = express()
app.disable('x-powered-by');

// Pour recréer DB, à commenter sinon
// initDb()

//

app.use(cors())
app.use(express.json())
app.use(helmet());


import morgan from 'morgan';
import path from 'path';
if (process.env.Prod == "prod"){
    const rfs = require("rotating-file-stream")
    const accesLogStream = rfs.createStream("log.log", {
        interval: '1d',
        compress: "gzip",
        maxFiles: 10,
        path: path.join(__dirname, 'log')
    })
    app.use(morgan('combined', { stream: accesLogStream}))
}else {
    app.use(morgan('dev', {
        skip: function (req, res) { return res.statusCode < 400 }
      }))
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})

app.use('/api', apiController)

/////////////

const { User } = require('./database/connect')
const jwt = require('jsonwebtoken')

function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    let message = 'No token given'
    if (token == null) return res.status(401).send({ message })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: Error, user: any) => {
        message = 'Expired token.'
        if (err) return res.status(403).send({ tokenIsExpired: true, message: message, data: err })
        req.user = user
        next()
    })
}

app.get('/api/users/test/:id', authenticateToken, (req: Request, res: Response) => {
    User.findByPk(req.params.id)
        .then((user: userTypes) => {
            if (user === null) {
                const message = "Requested user does not exist."
                return res.status(404).json({ message })
            }

            const message: string = 'User found.'
            res.json({ message, data: user })
        })
        .catch((error: ApiException) => {
            const message = "Cannot find user."
            res.status(500).json({ message, data: error })
        })
})

////////////////



app.use(({ res: ApiException }: any) => {
    const message = 'Ressource not found.'
    return ApiException.status(404).json({ message })
})

export default app
