const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

fs.readFile(file, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(file + '.gz', buffer, err => {
      console.log('File successfully compressed');
    });
  });
});

/*
  If we choose a file that is big enough, let's say a little bit bigger than 1GB, 
  we will receive a nice error message saying that the file that we are trying 
  to read is bigger than the maximum allowed buffer size, such as the following:


  RangeError: File size is greater than possible Buffer: 0x3FFFFFFF bytes
*/