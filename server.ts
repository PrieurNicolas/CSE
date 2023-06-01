import 'dotenv/config'
import { ApiException } from './types/exception'
import { Response, Request } from 'express';
import { apiController } from './controllers/apiController';
import { initDb } from './database/connect';
import helmet from 'helmet';
import cors from 'cors';
import log from './log';

const express = require("express")
require("./socket")
const app = express()
app.disable('x-powered-by');

// Pour recréer DB, à commenter sinon
// initDb()

app.use(cors())
app.use(express.json())
app.use(helmet());
log(app);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})

app.use('/api', apiController)

app.use(({ res: ApiException }: any) => {
    const message = 'Ressource not found.'
    return ApiException.status(404).json({ message })
})

export default app
