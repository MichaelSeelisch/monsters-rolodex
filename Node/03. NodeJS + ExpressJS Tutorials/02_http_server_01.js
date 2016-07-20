var server = require('http');

server.createServer(engine).listen(1337);

function engine(request, response) {
  response.writeHead(200, { 'Content-Rype': 'text/plain', 'MyNewKey': 'MyNewValue'});
  response.end('Hey there, from the server! :D');
};
