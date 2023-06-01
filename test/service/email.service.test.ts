import { SentMessageInfo, Transporter } from 'nodemailer';
import { EmailService } from '../../services/email.service';

jest.mock('nodemailer', () => ({
    createTransport: jest.fn().mockReturnValue({
      sendMail: jest.fn().mockReturnValue((mailoptions:any, callback:any) => {})
    })
  }));
const nodemailer = require('nodemailer');

describe('EmailService', () => {
    let emailService: EmailService;
    let transporter: Transporter|null;
    beforeEach(() => {
        transporter = nodemailer.createTransport({});
        emailService = new EmailService(transporter);
    });

    it('should send an email', async () => {
        const to = 'recipient@example.com';
        const subject = 'Test Email';
        const text = 'This is a test email';
        const info: SentMessageInfo = await emailService.sendMail(to, subject, text);
        
        expect(info).toBeDefined();
    });
});