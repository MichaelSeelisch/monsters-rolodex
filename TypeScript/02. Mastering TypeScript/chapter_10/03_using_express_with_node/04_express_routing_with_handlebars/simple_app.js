"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var Index = require("./routes/Index");
var Login = require("./routes/Login");
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', Index.router);
app.use('/', Login.router);
app.listen(3000, function () {
    console.log("Listening on  http://localhost:3000 ...");
});
