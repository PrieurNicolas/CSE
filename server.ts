require('dotenv').config()

const cors = require('cors')
const express = require("express")

const app = express()

app.use(cors())

import { ApiException } from './types/exception'
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const sequelize = require('./database/connect')

import { Response, Request, NextFunction } from 'express'

app.use(express.json())

// Pour recréer DB, à commenter sinon

// sequelize.initDb()

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Centre Social Eclaté',
            description: 'Swagger',
            contact: {
                name: 'front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url: `http://localhost:${port}`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./routes/*/*.ts`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

require('./routes/tokens/findAllTokens')(app)
require('./routes/tokens/findTokenByPk')(app)
// require('./routes/tokens/createToken')(app)
require('./routes/tokens/deleteToken')(app)

require('./routes/users/findAllUsers')(app)
require('./routes/users/findAllUsersAdmin')(app)
require('./routes/users/findUserByPk')(app)
// require('./routes/users/createUser')(app)
require('./routes/users/createUserAdmin')(app)
require('./routes/users/updateUser')(app)
require('./routes/users/deleteUser')(app)

require('./routes/auth/login')(app)
require('./routes/auth/loginAdmin')(app)
require('./routes/auth/token')(app)

require('./routes/role/createRole')(app)
require('./routes/role/deleteRole')(app)
require('./routes/role/findAllRole')(app)
require('./routes/role/findRoleById')(app)
require('./routes/role/updateRole')(app)

require('./routes/period/createPeriod')(app)
require('./routes/period/deletePeriod')(app)
require('./routes/period/findAllPeriod')(app)
require('./routes/period/findPeriodById')(app)
require('./routes/period/updatePeriod')(app)

require('./routes/localisation/createLocalisation')(app)
require('./routes/localisation/deleteLocalisation')(app)
require('./routes/localisation/findAllLocalisation')(app)
require('./routes/localisation/findLocalisationById')(app)
require('./routes/localisation/updateLocalisation')(app)

require('./routes/employer/createEmployer')(app)
require('./routes/employer/deleteEmployer')(app)
require('./routes/employer/findAllEmployer')(app)
require('./routes/employer/findEmployerById')(app)
require('./routes/employer/updateEmployer')(app)

require('./routes/degree/createDegree')(app)
require('./routes/degree/deleteDegree')(app)
require('./routes/degree/findAllDegree')(app)
require('./routes/degree/findDegreeById')(app)
require('./routes/degree/updateDegree')(app)

require('./routes/candidate/createCandidate')(app)
require('./routes/candidate/deleteCandidate')(app)
require('./routes/candidate/findAllCandidate')(app)
require('./routes/candidate/findCandidateById')(app)
require('./routes/candidate/updateCandidate')(app)

require('./routes/form/formUpdateCandidate')(app)
require('./routes/form/formUpdateEmployer')(app)

require('./routes/message/findByDiscussion')(app)
require('./routes/message/createMessage')(app)

/////////////

import { userTypes } from "./types/user";
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

/**
  * @openapi
  * /api/users/test/{id}:
  *  get:
  *      tags: [Users]
  *      description: Get an template by id
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *      responses:
  *        200:
  *          description: test
  */
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