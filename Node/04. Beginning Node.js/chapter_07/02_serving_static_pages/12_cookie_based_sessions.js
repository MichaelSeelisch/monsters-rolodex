var express = require('express');
var cookieSession = require('cookie-session');

var app = express()
  .use(cookieSession({
    keys: ['my super secret sign key'],
    name: 'My Session Cookie'
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

    /* ...or delete entire user session:
       req.session = null;
    */

    res.end('Cleared all your views and cookie: ' + req.sessionOptions.name);
  })
  .listen(3000);

console.log('Server running on port 3000');

// Run Server:
// $ node 12_cookie_based_sessions.js

// Open in Browser and refresh multiple times:
// http://localhost:3000/home

// Reset counter:
// http://localhost:3000/reset