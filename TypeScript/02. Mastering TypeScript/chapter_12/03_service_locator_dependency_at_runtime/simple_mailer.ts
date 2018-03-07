import { ServiceLocator } from './app/ServiceLocator';
import { ISystemSettings } from './app/ISystemSettings';
import GMailService from './app/GMailService';

let smtpSinkSettings : ISystemSettings  = {
    SmtpServerConnectionString : 'smtp://localhost:1025',
    SmtpFromAddress : 'smtp_from@test.com'
};

ServiceLocator.register('ISystemSettings', smtpSinkSettings);

let currentSettings : ISystemSettings = ServiceLocator.resolve('ISystemSettings');

let gmailService = new GMailService(); 

gmailService.sendMail( 
    "test2@test.com",  
    "subject",  
    "content").then( (msg) => { 
        console.log(`sendMail result :(${msg})`);
        console.log(`current smtp from address : ${currentSettings.SmtpFromAddress}`);
    }
);