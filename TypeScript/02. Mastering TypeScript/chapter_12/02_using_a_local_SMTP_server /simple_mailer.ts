import GMailService from './app/GMailService'; 
 
let gmailService = new GMailService({ 
    SmtpServerConnectionString : 'smtp://localhost:1025', 
    SmtpFromAddress : 'smtp_from@test.com' 
}); 

gmailService.sendMail( 
    "test2@test.com",  
    "subject",  
    "content").then( (msg) => { 
        console.log(`sendMail result :(${msg})`); 
    }
);