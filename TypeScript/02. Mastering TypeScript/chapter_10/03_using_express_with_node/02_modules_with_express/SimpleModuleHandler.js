"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processRequest(req, res) {
    console.log("SimpleModuleHandler.processRequest");
    res.send('<h1>Hello World, from ModuleHandler!</h1>');
}
exports.processRequest = processRequest;
