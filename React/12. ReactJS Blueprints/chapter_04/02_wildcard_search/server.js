'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors'); // Allow Cross-Origin Requests
var mongoose = require('mongoose');

var app = express()
  .use(cors({ 
    credentials: true,
    origin: true
  }));

mongoose.connect('mongodb://localhost/websearchapi/sites');

var siteSchema = new mongoose.Schema({
  title: String,
  link: String,
  desc: String
});

var searchDb = mongoose.model('sites', siteSchema);

var routes = function (app) {
  app.use(bodyparser.json());
  app.get('/search/:title', function (req, res) {
    searchDb.find({
      title: {
        // $regex: '^' + req.params.title + '*',
        $regex: req.params.title + '*',
        $options: 'ix'
      }
    }, function (err, data) {
      res.json(data);
    });
  });
};

var port = process.env.PORT || 5000;

var router = express.Router();
routes(router);

app.use('/v1', router);
app.listen(port, function () {
  console.log('Server listening on port ' + (process.env.PORT || port));
});