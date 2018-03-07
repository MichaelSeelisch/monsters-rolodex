"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceLocator_1 = require("./app/ServiceLocator");
const GMailService_1 = require("./app/GMailService");
let smtpSinkSettings = {
    SmtpServerConnectionString: 'smtp://localhost:1025',
    SmtpFromAddress: 'smtp_from@test.com'
};
ServiceLocator_1.ServiceLocator.register('ISystemSettings', smtpSinkSettings);
let currentSettings = ServiceLocator_1.ServiceLocator.resolve('ISystemSettings');
let gmailService = new GMailService_1.default();
gmailService.sendMail("test2@test.com", "subject", "content").then((msg) => {
    console.log(`sendMail result :(${msg})`);
    console.log(`current smtp from address : ${currentSettings.SmtpFromAddress}`);
});
