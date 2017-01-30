var express = require('express');
var expressSession = require('express-session');

var MongoStore = require('connect-mongo')(expressSession);

var sessionStore = new MongoStore({
  host: '127.0.0.1',
  port: '27017',
  db: 'session',
  url: 'mongodb://localhost:27017/demo'
});

var app = express()
  .use(expressSession({
    secret: 'My super secret sign key',
    store: sessionStore
  }))
  .use('/home', function (req, res) {
    if (req.session.views) {
      req.session.views++;
    }
    else {
      req.session.views = 1;
    }
    res.end('Total views for you: ' + req.session.views);
  })
  .use('/reset', function (req, res) {
    delete req.session.views;
    res.end('Cleared all your views');
  }).listen(3000);

// Run Server:
// $ 05_mongo_session_Store.js

// Open in Browser and refresh multiple times:
// http://localhost:3000/home

// Reset counter:
// http://localhost:3000/resets