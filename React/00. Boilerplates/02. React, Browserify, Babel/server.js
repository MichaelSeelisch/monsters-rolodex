var express = require('express'),
    browserify = require('browserify-middleware'),
    babelify = require('babelify'),
    browserSync = require('browser-sync');

var app = express();
var port = process.env.PORT || 8080;

browserify.settings({
  transform: [babelify.configure({})],
  presets: ['es2015', 'react'],
  extensions: ['.js', '.jsx'],
  grep: /\.jsx?$/
});

app.get('/bundle.js', browserify(__dirname + '/src/index.jsx'));

app.get(['*.png', '*.jpg', '*.css', '*.map', '*.ico'], function (req, res) {
  res.sendFile(__dirname + '/dist/' + req.path);
});

// All other requests will be routed to index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// Run the server
app.listen(port, function () {
  browserSync({
    proxy: 'localhost:' + port,
    files: ['sr/**/*.{jsx, js}', 'dist/**/*.{css}'],
    options: {
      ignored: 'node_modules'
    }
  });
});
