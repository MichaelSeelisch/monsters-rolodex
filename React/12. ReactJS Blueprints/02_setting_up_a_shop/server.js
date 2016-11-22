var express = require('express'),
    browserify = require('browserify-middleware'),
    babelify = require('babelify'),
    browserSync = require('browser-sync');

var app = express();
var port = process.env.PORT || 8080;

browserify.settings({
  transform: [babelify.configure({
  })],
  presets: ['es2015', 'react'],
  extensions: ['.js', '.jsx'],
  grep: /\.jsx?$/
});

// Serve client code via browserify
app.get('/bundle.js', browserify(__dirname + '/source/App.jsx'));

// Resources
app.get(['*.png', '*.jpg', '*.css', '*.map', '*.ico'], function (req, res) {
  res.sendFile(__dirname + '/public/' + req.path);
});

// JSON
app.get('*.json', function (req, res) {
  res.sendFile(__dirname + '/public/' + req.path);
});

// All other requests will be routed to index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Run the server
app.listen(port, function () {
  browserSync({
    proxy: 'localhost:' + port,
    files: ['source/**/*.{jsx, js}', 'public/**/*.{css}'],
    options: {
      ignored: 'node_modules'
    }
  });
});
