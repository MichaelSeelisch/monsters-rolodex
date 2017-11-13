"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Index = require("./routes/Index");
var Login = require("./routes/Login");
var app = express();
app.use('/', Index.router);
app.use('/', Login.router);
app.listen(3000, function () {
    console.log("Listening on  http://localhost:3000 ...");
});
