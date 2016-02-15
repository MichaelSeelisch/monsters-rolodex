var http        = require('http'),
    formidable  = require('formidable');

var server = http.createServer(function(req, res) {
    switch(req.method) {
        case 'GET':
            show(res);
            break;

        case 'POST':
            upload(req, res);
            break;

        default:
            // Do nothing
    }
});

server.listen(3000);

function show(res) {
    var html = '<form method="post" action="/" enctype="multipart/form-data">'
             + '<p><input type="text" name="name" /></p>'
             + '<p><input type="file" name="file" /></p>'
             + '<p><input type="submit" value="Upload" /></p>'
             + '</form>';
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength<(html));
    res.end(html);
};

function upload(req, res) {
    if(!isFormData(req)) {
        res.statusCode  = 400;
        res.end('Bad Request: expecting multipart/form-data');
        return;
    }
    
    /* formidable long version: */
    var form = new formidable.IncomingForm();
    
    form.on('field', function(field, value) {
        console.log(field);
        console.log(value);
    });
    
    form.on(file, function(name, file) {
        console.log(name);
        console.log(file);
    });
    
    form.on('end', function() {
        red.end('upload complete');
    });
    
    form.parse(req);
    
    /*  Short version
    *   var form = new formidable.IncomingForm();
    *   
    *   form.parse(req, function(err, fields, files) {
    *       console.log(fields);
    *       console.log(files);
    *       res.end('upload complete');
    *   });
    *
    *   form.parse(req);
    */
};

function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}