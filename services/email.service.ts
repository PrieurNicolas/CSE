import { createTransport, Transporter } from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';
import { Options } from 'nodemailer/lib/smtp-transport';

export class EmailService {
    private transporter;

    constructor() {
        const options: Options = {
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL!,
                pass: process.env.MDP_EMAIL!,
            },
            secure: true,
        };
        let nodemailer = require("nodemailer");
        this.transporter = nodemailer.createTransport(options);
      }


      async sendMail(to: string, subject: string, text: string): Promise<SentMessageInfo> {
        const message = {
          from: process.env.EMAIL!,
          to,
          subject,
          text,
        };
        // console.log(this.transporter)
        const info = await this.transporter.sendMail(message);
        return info;
      }
}