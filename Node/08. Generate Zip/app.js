var express = require('express');
var http = require('http');
var fs = require('fs');
var serveStatic = require('serve-static');

var filename;

var app = express()
    .use(serveStatic(__dirname + '/public'))
    .post('/', function(req, res) {
      createZip();
      res.download(filename);
    })
    .get('favicon.ico', function (req, res) {
      res.writeHead(200, {'Content-Type': 'image/x-icon'});
      res.end();
      return;
    });

http.createServer(app)
    .listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

function createZip() {
  var zip = require('node-zip')();
  zip.file('test.txt', 'hello there');
  
  var data = zip.generate({
    base64:false,
    compression:'DEFLATE'
  });

  filename = 'test_' + getRandom() + '.zip';

  fs.writeFileSync(filename, data, 'binary');
};

function getRandom() {
  return (Math.random() * (10 - 1) + 1).toFixed(2);
}