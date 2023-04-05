import { Transporter } from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';
import { Options } from 'nodemailer/lib/smtp-transport';

export class EmailService {
    private transporter;
      constructor(transporter: Transporter |null){
        if(transporter){
          this.transporter = transporter

        }else {
          const options: Options = {
            // port: 465,
            // host: "smtp.gmail.com",
            host : "in-v3.mailjet.com",
            port: 587,
            auth: {
                user: process.env.EMAIL!,
                pass: process.env.MDP_EMAIL!,
            },
            secure: false,
        };
        let nodemailer = require("nodemailer");
        this.transporter = nodemailer.createTransport(options);
        }
      }


      async sendMail(to: string, subject: string, text: string): Promise<SentMessageInfo> {
        const message = {
          from: process.env.VEMAIL!,
          to,
          subject,
          text,
        };

        const info = await this.transporter.sendMail(message);
        return info;
      }
}