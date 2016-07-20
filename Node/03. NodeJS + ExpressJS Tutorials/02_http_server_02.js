var http = require('http');
var server = http.createServer(engine);

server.listen(1337, function() {
  console.log('Server was hit by a request!');
});

function engine(request, response) {
  //.com.apple.timemachine.donotpresentconsole.log(response);

  response.writeHead(200, { 'Content-Rype': 'text/plain', 'MyNewKey': 'MyNewValue'});
  response.end('Hey there, from the server! Request from page ' + request.url);
};
