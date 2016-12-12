var http = require('http');
var server = http.createServer(function (request, response) {
  console.log('Request headers...');
  console.log(request.headers);
  
  // Responde
  console.log('Request starting...');
  response.write('Hello Client!\n');
  response.end();
});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');