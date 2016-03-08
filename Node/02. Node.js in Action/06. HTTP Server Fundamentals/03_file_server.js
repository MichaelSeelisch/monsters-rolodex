var http    = require('http'),
    parse   = require('url').parse,
    join    = require('path').join,
    fs      = require('fs'),

    root    = __dirname;

/* Static file server long version */
/*
    var server = http.createServer(function(req, res) {
        var url     = parse(req.url);
        var path    = join(root, url.pathname);
        var stream  = fs.createReadStream(path);
        stream.on('data', function(chunk) {
            res.write(chunk);
        });
        stream.on('end', function() {
            res.end();
        });
    });
*/

/* Static file server short version */
/*
    var server = http.createServer(function(req, res) {
        var url     = parse(req.url);
        var path    = join(root, url.pathname);
        var stream  = fs.createReadStream(path);
        stream.pipe(res);
        stream.on('error', function(err) {
            res.statusCode = 500;
            res.end('Internal Server Error' + '\n');
        })
    });
*/

/* Static file server with checking for a file's existence and responding with Content_length */
var server = http.createServer(function(req, res) {
    // Parse URL to obtain path name
    var url     = parse(req.url);

    // Construct absolute path
    var path    = join(root, url.pathname);

    // Check for file's existance
    fs.stat(path, function(err, stat) {
        if(err) {
            // Filke doesn't exist
            if('ENOENT' == err.code) {
                res.statusCode = 404;
                res.end('File not found');
            }
            // Some other error
            else {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        }

        else {
            // Set Content-Length using stat object
            res.setHeader('Content-Length', stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(res);
            stream.on('error', function(err) {
                res.statusCode = 500;
                res.end('INternal Server Error');
            });
        }
    });
});


server.listen(3000);

/*
  1. Terminal-Fenster 1 starten, dann: 'node 03_file_server.js'
  2. Terminal-Fenster 2 starten, dann:
      curl http://localhost:3000/03_file_server.js -i (das i ist zum Anzeigen des Headers)
*/
