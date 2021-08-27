const nodemailer = require('nodemailer');
const config = require('../config');

module.exports = class Mailer {
    constructor() {
        this.mailer = nodemailer.createTransport(config.smtp);
    }

    async send(to, subject, html, from = `${config.smtp.auth.user}`) {
        await this.mailer.sendMail({ to, subject, html, from });
    }
}