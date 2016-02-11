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

var server = http.createServer(function(req, res) {
    var url     = parse(req.url);
    var path    = join(root, url.pathname);
    var stream  = fs.createReadStream(path);
    stream.pipe(res);  
});

server.listen(3000);

/*
  1. Terminal-Fenster 1 starten, dann: 'node file_server.js'
  2. Terminal-Fenster 2 starten, dann:
      curl http://localhost:3000/file_server.js -i (das i ist zum Anzeigen des Headers)
*/