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

const diContainer = require('./lib/diContainer')();
diContainer.register('dbName', 'example-db');
diContainer.register('tokenSecret', 'SHHH!');
diContainer.factory('db', require('./lib/db'));
diContainer.factory('authService', require('./lib/authService'));
diContainer.factory('authController', require('./lib/authController'));

const authController = diContainer.get('authController');   //[3]

app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);

app.use(errorHandler());

http.createServer(app).listen(3000, () => {
    console.log('Express server started');
});
