var https = require('https'),
    fs    = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./key-cert.pem')
};

var server = https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('Hello World\n');
});

server.listen(3000);

/*
  1. Terminal-Fenster 1 starten, dann: 'node 06_https_server.js'
  2. Browser-Fenster starten, dann URL eingeben: https://localhost:3000/
  3. Zertifikat Warnung ignorieren
*/
