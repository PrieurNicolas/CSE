export default class ImageService {
    upload(req:any, res:any) {
        const fs = require('fs');
        const path = require('path');
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
        const extension = '.' + sampleFile.name.split('.')[defragFileName - 1]
        uploadPath = path.join(imgDir, req.body.nom + req.body.prenom + date + extension);

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(uploadPath, function (err: any) {
            if (err)
                return res.status(500).send(err);
            return res.status(200).send('File uploaded!');
        });
    }
};
