"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const ServiceLocator_1 = require("./ServiceLocator");
class GMailService {
    constructor() {
        this._settings = ServiceLocator_1.ServiceLocator.resolve('ISystemSettings');
        this._transporter = nodemailer.createTransport(this._settings.SmtpServerConnectionString);
    }
    sendMail(to, subject, content) {
        let options = {
            from: this._settings.SmtpFromAddress,
            to: to,
            subject: subject,
            text: content
        };
        return new Promise((resolve, reject) => {
            this._transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log(`error: ${error}`);
                    reject(error);
                }
                else {
                    console.log(`Message Sent 
                                ${info.response}`);
                    resolve(`Message Sent  
                                ${info.response}`);
                }
            });
        });
    }
}
exports.default = GMailService;
