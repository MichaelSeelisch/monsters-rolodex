import Hapi from 'hapi';
import nunjucks from 'nunjucks';

// Configure nunjucks to read from the dist directory
nunjucks.configure('./dist');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    // Read template and compile using context object
    nunjucks.render('index.html', {

      /* Query parameters
       * localhost:8000/hello?fname=jerry&lname=smith.
       */
      fname: request.query.fname,
      lname: request.query.lname

    }, function (err, html) {
      // Reply with html response
      reply(html);
    });
  }
});

// Start the server
server.start();
