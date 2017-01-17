var express = require('express');
var serveIndex = require('serve-index');

var app = express()
    .use(express.static(__dirname + '/serve_index_folder'))
    .use(serveIndex(__dirname + '/serve_index_folder'))
    .listen(3000);