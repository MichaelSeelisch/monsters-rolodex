var connect = require('connect');
var formidable = require('formidable');
var util = require('util');

var app = connect()
  .use(function(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n');
      res.end(util.inspect({fields: fields, files: files}) + '\n');
    });
  }).listen(3000);

/*
  $ curl --form image=@photo.jpeg --form name=tobi http://localhost:3000
  oder...
  $ curl -F image=@photo.jpeg -F name=tobi http://localhost:3000

  received upload:
  { fields: { name: 'tobi' },
    files:
     { image:
        File {
          domain: null,
          _events: {},
          _eventsCount: 0,
          _maxListeners: undefined,
          size: 7541,
          path: '/var/folders/zl/nrcydgw57z1fpb0sl6zxnv040000gp/T/upload_fd1174442080f891e4aba52781e11d55',
          name: 'photo.jpeg',
          type: 'image/jpeg',
          hash: null,

          lastModifiedDate: Wed May 11 2016 10:55:20 GMT+0200 (CEST),
          _writeStream: [Object] } } }
*/
