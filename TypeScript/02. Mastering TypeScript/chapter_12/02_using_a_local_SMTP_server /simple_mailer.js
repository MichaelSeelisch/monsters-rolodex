"use strict";
exports.__esModule = true;
var GMailService_1 = require("./app/GMailService");
var gmailService = new GMailService_1["default"]({
    SmtpServerConnectionString: 'smtp://localhost:1025',
    SmtpFromAddress: 'smtp_from@test.com'
});
gmailService.sendMail("test2@test.com", "subject", "content").then(function (msg) {
    console.log("sendMail result :(" + msg + ")");
});
