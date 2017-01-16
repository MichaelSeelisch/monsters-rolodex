var express = require('express');
var http = require('http');

// Create an express application
var app = express()
    // Register a middleware
    .use(function (req, res, next) {
        res.end('Hello Express!');
    });

// Register with http 
http.createServer(app)
    .listen(3000);