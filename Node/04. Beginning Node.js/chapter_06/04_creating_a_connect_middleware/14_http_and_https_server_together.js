var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
  res.end('Secure!');
})
.listen(443);

// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(301, {'Location': 'https://' + req.headers['host'] + req.url});
  res.end();
})
.listen(80);

console.log('Server running on port 443 and 80');