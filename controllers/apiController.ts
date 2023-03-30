import { Router } from "express";
import { employerController } from './employerController';
import { degreeController } from './degreeController';
import { candidateController } from './candidateController';
import { usersController } from "./userController"
import { tokenController } from "./tokenController"
import { roleController } from "./roleController"
import { periodController } from './periodController';
import { localisationController } from './localisationController';
import { authController } from "./authController";
import { bannisController } from "./bannisController";
import { reportController } from "./reportController";

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const apiController = Router();
const port = process.env.PORT || 5000
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API CSE',
            description: 'Swagger CSE',
            contact: {
                name: 'Best front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url: `http://localhost:${port}`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./controllers/*.ts`]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

apiController.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
apiController.use('/users', usersController)
apiController.use('/tokens', tokenController)
apiController.use('/roles', roleController)
apiController.use('/periods', periodController)
apiController.use('/localisations', localisationController)
apiController.use('/employers', employerController)
apiController.use('/degrees', degreeController)
apiController.use('/candidates', candidateController)
apiController.use('/auth', authController)
apiController.use('/ban', bannisController)
apiController.use('/report', reportController)

export { apiController }