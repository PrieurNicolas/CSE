export default class ImageService {
    upload(files: any, personne: any, ban = false): string | void {
        const fs = require('fs');
        const path = require('path');
        let sampleFile;
        let uploadPath;

        if (!files || Object.keys(files).length === 0) {
            throw new Error('No files were uploaded.');
        }

        // Create img directory if it doesn't exist
        let imgDir
        imgDir = path.join(__dirname, '../', 'img');
        if (!fs.existsSync(imgDir)) {
            fs.mkdirSync(imgDir);
        }
        if (ban) {
            imgDir = path.join(__dirname, '../', 'img', 'ban');
            if (!fs.existsSync(imgDir)) {
                fs.mkdirSync(imgDir);
            }
        }


        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = files.sampleFile;
        const defragFileName = sampleFile.name.split('.').length
        const extension = '.' + sampleFile.name.split('.')[defragFileName - 1]

        let fileRegister = "";
        if (personne.siret) {
            uploadPath = path.join(imgDir, personne.siret + extension);
        }
        if (personne.firstname) {
            const date = (new Date(personne.birthday).toLocaleDateString("fr-FR", {
                month: "2-digit",
                day: "2-digit"
            }).split('/').join(''))
            fileRegister = personne.lastname + personne.firstname + date + extension
            uploadPath = path.join(imgDir, fileRegister);
        }
        if (personne.reporteurId) {
            uploadPath = path.join(imgDir, personne.reporteurId + "Reporte" + personne.idReporte + extension);
        }

        // Use the mv() method to place the file somewhere on your server
        return sampleFile.mv(uploadPath, function (err: any) {
            if (err)
                throw new Error(err);
            return fileRegister;
        });

    }
};