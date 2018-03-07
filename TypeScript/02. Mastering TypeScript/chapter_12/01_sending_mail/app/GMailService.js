"use strict";
exports.__esModule = true;
var nodemailer = require("nodemailer");
var GMailService = (function () {
    function GMailService(settings) {
        this._settings = settings;
        this._transporter = nodemailer.createTransport(this._settings.SmtpServerConnectionString);
    }
    GMailService.prototype.sendMail = function (to, subject, content) {
        var _this = this;
        var options = {
            from: this._settings.SmtpFromAddress,
            to: to,
            subject: subject,
            text: content
        };
        return new Promise(function (resolve, reject) {
            _this._transporter.sendMail(options, function (error, info) {
                if (error) {
                    console.log("error: " + error);
                    reject(error);
                }
                else {
                    console.log("Message Sent \n                            " + info.response);
                    resolve("Message Sent  \n                            " + info.response);
                }
            });
        });
    };
    return GMailService;
}());
exports["default"] = GMailService;
