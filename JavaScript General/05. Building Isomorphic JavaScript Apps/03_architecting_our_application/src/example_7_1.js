import Hapi from 'hapi';
import nunjucks from 'nunjucks';

import Application from './lib';

// Configure nunjucks to read from the dist directory
nunjucks.configure('./dist');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host:'localhost',
  port: 8000
});

function getName(request) {
  // function body omitted  for brevity
}

const application = new Application({
  // Responds to http://localhost:8000/
  '/': function (request, reply) {
    // Read template and compile using context object
    nunjucks.render('index.html',
      getName(request), function (err, html) {
        // Reply with html response
        reply(html);
      }
    );
  }, {
    server: server
  }
});

application.start();
