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

// Accessing path and query parameters
function getName(request) {
  // Default values
  let name = {
    fname: 'Rick',
    lname: 'Sanchez'
  };

  // Split path params
  let nameParts = request.params.name ? request.params.name.split('/') : [];

  /* Order of precedence
   * 1. Path param
   * 2. Query param
   * 3. Default Value
   */
   name.fname = (nameParts[0] || request.query.fname) || name.fname;
   name.lname = (nameParts[1] || request.query.lname) || name.lname;

   return name;
}

// Add the route
server.route({
  method: 'GET',
  path: '/hello/{name*}',
  handler: function (request, reply) {
    // Read template and compile using context object
    nunjucks.render('index.html',

    /* Path parameters
     * localhost:8000/hello/John/Smith
     */
      getName(request),

      function (err, html) {
      // Reply with html response
      reply(html);
    });
  }
});

// Start the server
server.start();
