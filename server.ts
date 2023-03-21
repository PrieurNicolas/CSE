import 'dotenv/config'
import { ApiException } from './types/exception'
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



const fs = require('fs');
const path = require('path');

app.post('/upload', function (req: any, res: any) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Create img directory if it doesn't exist
    const imgDir = path.join(__dirname, 'img');
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir);
    }
    const date = (new Date(req.body.date).toLocaleDateString("fr-FR", {
        month: "2-digit",
        day: "2-digit"
    }).split('/').join(''))

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    const defragFileName = sampleFile.name.split('.').length
    const extension = '.'+sampleFile.name.split('.')[defragFileName-1]
    uploadPath = path.join(imgDir, req.body.nom+req.body.prenom+date+extension);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err:any) {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send('File uploaded!');
    });
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
