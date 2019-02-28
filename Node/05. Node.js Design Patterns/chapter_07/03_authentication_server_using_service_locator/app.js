"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const app = module.exports = express();
app.use(bodyParser.json());

const dbFactory = require('./lib/db');
const authServiceFactory = require('./lib/authService');
const authControllerFactory = require('./lib/authController');

const db = dbFactory('example-db');
const svcLoc = require('./lib/serviceLocator')();      //[1]

svcLoc.register('dbName', 'example-db');               //[2]
svcLoc.register('tokenSecret', 'SHHH!');
svcLoc.factory('db', require('./lib/db'));
svcLoc.factory('authService', require('./lib/authService'));
svcLoc.factory('authController', require('./lib/authController'));

const authController = svcLoc.get('authController');   //[3]

app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);

app.use(errorHandler());

http.createServer(app).listen(3000, () => {
    console.log('Express server started');
});
