"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var simpleHandler = require("./SimpleModuleHandler");
var app = express();
app.get('/', simpleHandler.processRequest);
app.listen(3000, function () {
    console.log("Listening on  http://localhost:3000 ...");
});
