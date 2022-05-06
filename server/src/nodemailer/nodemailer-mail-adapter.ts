import { MailAdapter, SendMailData } from "../adapters/mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4a54dd84c3f3e9",
        pass: "34d8df86d070b0"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Ademir Diamente Júnior <ademir.diamentejunior@gmail.com>',
        subject,
        html: body,
    })
    }
}