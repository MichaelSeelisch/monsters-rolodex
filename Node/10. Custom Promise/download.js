let zip = new require('node-zip')();
let fs = require('fs');

let downloadFiles = new Promise((resolve, reject) => {
  zip.file('test.txt');

  let data = zip.generate({
    base64: false,
    binary: true,
    compression: 'DEFLATE'
  });

  if (data) {
    resolve(data);
  }
  else {
    reject('Error creating Zip file!');
  }
});

module.exports = {
  download: downloadFiles
};