import { SentMessageInfo } from 'nodemailer';
import { EmailService } from '../../services/email.service';
jest.mock('nodemailer');
const nodemailer = require('nodemailer');
const nodemailerMock = require('nodemailer-mock');



describe('EmailService', () => {
    let emailService: EmailService;

    beforeEach(() => {
        emailService = new EmailService();
    });

    it('should send an email', async () => {
        const to = 'recipient@example.com';
        const subject = 'Test Email';
        const text = 'This is a test email';
        const info: SentMessageInfo = await emailService.sendMail(to, subject, text);

        expect(info).toBeDefined();
        expect(info.messageId).toBeDefined();
    });

    // it('test 2', async () => {
    //     const destinataire = 'exemple@example.com';
    //     const objet = 'Test d\'envoi de mail';
    //     const contenu = 'Ceci est un test d\'envoi de mail';

    //     const t = nodemailer.createTransport.mockImplementation(() => nodemailerMock.createTransport());
    //     console.log(t);
        
    //     await nodemailer.transporter.sendMail({
    //         to: destinataire,
    //         subject: objet,
    //         text: contenu
    //     })
    //     expect(nodemailerMock.mock.sentMail.length).toEqual(1);
    //     expect(nodemailerMock.mock.sentMail[0].to).toEqual('recipient@example.com');
    //     expect(nodemailerMock.mock.sentMail[0].subject).toEqual('Test Email');
    //     expect(nodemailerMock.mock.sentMail[0].text).toEqual('This is a test email.');
    // })
});