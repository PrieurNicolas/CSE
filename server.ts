import 'dotenv/config';
import { Response, Request } from 'express';
import { apiController } from './controllers/apiController';
import { initDb } from './database/connect';
import helmet from 'helmet';
import cors from 'cors';
import log from './log';
import fileUpload from 'express-fileupload';
import dailyTask from './cron';

const express = require("express");
// require("./socket");
const app = express();
app.disable('x-powered-by');

// Pour recréer DB, à commenter sinon
// initDb()
//

app.use(cors());
app.use(express.json());
//utilisation de helmet pour modifier le header de reponse 
app.use(helmet());

//utilise le dossier image comme route pour recupéré celle ci
app.use('/img', express.static('img'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

// function qui permet d'avoir les logs de l'application
log(app);

// fonction pour les taches crons 
dailyTask();

// le port sur lequel le serveur tourne sois defini par l'environnement soit 5000 par default
const port = process.env.PORT || 8000;
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
