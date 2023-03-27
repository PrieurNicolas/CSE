import 'dotenv/config';
import { Response, Request } from 'express';
import { apiController } from './controllers/apiController';
import { initDb } from './database/connect';
import helmet from 'helmet';
import cors from 'cors';
import log from './log';
import fileUpload from 'express-fileupload';

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
app.use('/img', express.static('img'))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

app.post('/upload', function (req: any, res: any) { 
});


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
