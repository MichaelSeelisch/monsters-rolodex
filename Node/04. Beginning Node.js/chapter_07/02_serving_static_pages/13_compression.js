var express = require('express');
var compression = require('compression');

var app = express()
  .use(compression())
  // .use(compression({ threshold: 512} )) // => Compress responses that are longer than 512 bytes
  .use(express.static(__dirname + '/public'))
  .listen(3000);

console.log('Server running on port 3000');

// Run Server:
// $ node 13_compression.js

// Test in Terminal:
// curl http://127.0.0.1:3000 -i --compressed