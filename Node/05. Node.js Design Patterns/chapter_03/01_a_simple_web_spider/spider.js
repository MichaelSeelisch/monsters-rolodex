const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

function spider(url, callback) {
  const filename = utilities.urlToFilename(url);

  fs.exists(filename, exists => {
    // Check, if the url was already downloaded by verifying the file was not already created
    if (!exists) {
      console.log(`Downloading ${url}`);
      request(url, (err, response, body) =>{
        // If the file is not found, the URL is downloaded
        if (err) {
          callback(err);
        }
        else {
          mkdirp(path.dirname(filename), err => {
            // Make sure whether the directory that will contain the file exists or not
            if(err) {
              callback(err);
            }
            else {
              fs.writeFile(filename, body, err => {
                // Write the body of the HTTP response to the filesystem
                if(err) {
                  callback(err);
                }
                else {
                  callback(null, filename, true);
                }
              });
            }
          });
        }
      });
    }
    else {
      callback(null, filename, false);
    }
  });
}

spider(process.argv[2], (err, filename, downloaded) => {
  if (err) {
    console.log(err);
  }
  else if (downloaded) {
    console.log(`"${filename}" was already downloaded`);
  }
});