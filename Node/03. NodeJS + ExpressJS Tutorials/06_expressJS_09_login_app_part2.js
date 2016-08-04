var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();
app.use('/cssFiles', express.static(__dirname + '/assets'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessions({
  // Random String encrypt data (f.e. session.id)
  secret: '8t2384cnfsr623876fbcquwe304cn',
  resave: false,
  saveUninitialized: true
}));

app.get('/login', function(req, resp) {
  session = req.session;

  if(session.uniqueID) {
    resp.redirect/('/redirects');
  }

  resp.sendFile('./files/login.html', {root: __dirname});
});

app.post('/login', function(req, resp) {
  session = req.session;

  if(session.uniqueID) {
    resp.redirect/('/redirects');
  }

  // if(req.body.username == 'admin' && req.body.password == 'admin') {
    session.uniqueID = req.body.username;
  // }

  resp.redirect('/redirects');
});

app.get('/logout', function(req, resp) {
  req.session.destroy(function(error) {
    console.log(error);

    resp.redirect('/login');
  });
});

app.get('/admin', function(req, resp) {
  session = req.session;

  if(session.uniqueID != 'admin') {
    resp.end('Unauthorized access!');
  }
  else {
    resp.send('You are the admin! <a href="/logout">KILL SESSION</a>');
  }
});

app.get('/redirects', function(req, resp) {
  session = req.session;

  if(session.uniqueID == 'admin') {
    resp.redirect('/admin');
  }
  else {
    resp.send(req.session.uniqueID + ' not found <a href="/logout">KILL SESSION</a>');
  }
});

app.listen(1337, function() {
  console.log('Listening at Port 1337!');
});
