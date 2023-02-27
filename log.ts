import morgan from 'morgan';
import path from 'path';

export default function log(app: any) {
    if (process.env.Prod == "prod") {
        const rfs = require("rotating-file-stream")
        const accesLogStream = rfs.createStream("log.log", {
            interval: '1d',
            compress: "gzip",
            maxFiles: 10,
            path: path.join(__dirname, 'log')
        })
        app.use(morgan('combined', { stream: accesLogStream }))
    } else {
        app.use(morgan('dev', {
            skip: function (req, res) { return res.statusCode < 400 }
        }))
    }
}
