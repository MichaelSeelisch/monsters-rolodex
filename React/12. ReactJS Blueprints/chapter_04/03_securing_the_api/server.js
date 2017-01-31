'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors'); // Allow Cross-Origin Requests
var mongoose = require('mongoose');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var app = express()
  .use(cors({ 
    credentials: true,
    origin: true
  }));

mongoose.connect('mongodb://localhost/websearchapi/sites');

var appToken = '1234567890';

passport.use(new Strategy(
  function (token, cb) {
    console.log(token);
    if (token === appToken) {
      return cb(null, true);
    }
    return cb(null, false);
  }
))

var siteSchema = new mongoose.Schema({
  title: String,
  link: String,
  desc: String
});

var searchDb = mongoose.model('sites', siteSchema);

var routes = function (app) {
  app.use(bodyparser.json());
  app.get('/search/:title',
    passport.authenticate('bearer', {session: false}),
    function (req, res) {
      searchDb.find({
        title: {
          $regex: '^' + req.params.title + '*',
          $options: 'i'
        }
      }, function (err, data) {
        if (err) {
          return console.log('Find error: ', err);
        }
        if (!data.length) {
          return res.status(500)
            .send({
              'msg': 'No results'
            })
        }
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