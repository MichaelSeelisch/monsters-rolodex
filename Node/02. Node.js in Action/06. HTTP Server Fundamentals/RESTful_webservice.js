var http  = require('http');
var url   = require('url');
var items = [];

var server = http.createServer(function(req, res) {

  switch(req.method) {
    case 'POST':

      var item = '';

      // Setting chunk to utf8 stead of a Buffer/Byte Array
      req.setEncoding('utf8');

      req.on('data', function(chunk) {
        // Concatenate data chunk onto the buffer
        item += chunk;
      });

      req.on('end', function() {
        // Push complete new item onto the items array
        items.push(item);
        res.end('OK\n');
      })

      break;

    case 'GET':
      /* Unoptimierte Version:
          items.forEach(function (item, i) {
            res.write(i + ') ' + item + '\n');
          });
          res.end();
      */

      var body = items.map(function(item, i) {
        return i + ') ' + item;
      }).join('\n');

      /*  byteLength, weil:
          $ node 'etc ...'.length
          5
          > Buffer.byteLength('etc ...');
          7
      */
      res.setHeader('Content-Length', Buffer.byteLength(body));

      res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
      res.end(body);

      break;

      case 'DELETE':
        var path = url.parse(req.url).pathname;
        var i = parseInt(path.slice(1), 10);

        if(isNaN(i)) {
          res.statusCode = 400;
          res.end('Invalid item id');
        }
        else if(!items[i]) {
          res.statusCode = 404;
          res.end('Item not found');
        }
        else {
          items.splice(i, 1);
          res.end('OK\n');
        }

        break;
  }

});

server.listen(3000);

/*
  1. Terminal-Fenster 1 starten, dann: 'node RESTful_webservice.js'
  2. Terminal-Fenster 2 starten, dann zur Eingabe von Daten:
      curl -d 'buy groceries' http://localhost:3000
      curl -d 'buy node in action' http://localhost:3000
  3. Zur Ausgabe der Daten:
      curl - G http://localhost:3000

  4. Zum löschen: curl -X "DELETE" http://localhost:3000/1?api-key=foobar
*/
