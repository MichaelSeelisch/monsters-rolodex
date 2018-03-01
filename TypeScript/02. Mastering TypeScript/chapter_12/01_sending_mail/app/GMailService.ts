import * as nodemailer from 'nodemailer'; 
import { ISystemSettings } from './ISystemSettings';

export default class GMailService {
    private _transporter: nodemailer.Transporter; 
    private _settings: ISystemSettings;

    constructor(settings: ISystemSettings) {
        this._settings = settings; 
        this._transporter = nodemailer.createTransport( 
            this._settings.SmtpServerConnectionString
        ); 
    } 
    
    sendMail(to: string, subject: string, content: string): Promise<void> { 
        let options = { 
            from: this._settings.SmtpFromAddress, 
            to: to, 
            subject: subject, 
            text: content 
        } 
 
        return new Promise<void> (
            (resolve: (msg: any) => void,  
            reject: (err: Error) => void) => { 
                this._transporter.sendMail(  
                    options, (error, info) => {
                        if (error) { 
                            console.log(`error: ${error}`); 
                            reject(error); 
                        } else { 
                            console.log(`Message Sent 
                            ${info.response}`); 
                            resolve(`Message Sent  
                            ${info.response}`); 
                        } 
                    })    
                } 
        ); 
    }
}