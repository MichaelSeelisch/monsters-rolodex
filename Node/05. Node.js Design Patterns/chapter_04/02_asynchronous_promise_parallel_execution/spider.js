const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');
const async = require('async');

const TaskQueue = require('./taskQueue');
const downloadQueue = new TaskQueue(2);

function spiderLinks(currentUrl, body, nesting) {
  if (nesting === 0) {
    return Promise.resolve();
  }

  let links = utilities.getPageLinks(currentUrl, body);
  
  // We need the following because the Promise we create next will never settle if there are no tasks to process 
  if (links.length === 0) { 
    return Promise.resolve(); 
  } 
 
  return new Promise((resolve, reject) => { 
    let completed = 0; 
    let errored = false; 

    links.forEach(link => { 
      let task = () => { 
        return spider(link, nesting - 1) 
          .then(() => { 
            if (++completed === links.length) { 
              resolve(); 
            } 
          }) 
          .catch(() => { 
            if (!errored) { 
              errored = true; 
              reject();
            } 
          }); 
      }; 
      
      downloadQueue.pushTask(task); 
    });  
  }); 
}

function saveFile(filename, contents, callback) {
  mkdirp(path.dirname(filename), err => {
    if (err) {
      return callback(err);
    }

    fs.writeFile(filename, contents, callback);
  });
}

function download(url, filename, callback) {
  console.log(`Downloading ${url}`);

  let body;

  // #1: Execute tasks in sequence
  async.series([
    callback => {
      //[1]
      request(url, (err, response, resBody) => {
        if (err) {
          return callback(err);
        }
        body = resBody;
        callback();
      });
    },

    mkdirp.bind(null, path.dirname(filename)),

    //[2]
    callback => {
      //[3]
      fs.writeFile(filename, body, callback);
    }
  ], err => {
    //[4]
    if (err) {
      return callback(err);
    }
    console.log(`Downloaded and saved: ${url}`);
    callback(null, body);
  })
}

const spidering = new Map();

function spider(url, nesting, callback) {
  if (spidering.has(url)) {
    return process.nextTick(callback);
  }
  
  const filename = utilities.urlToFilename(url);

  fs.readFile(filename, 'utf8', (err, body) => {
    if (err) {
      if (err.code !== 'ENOENT') {
        return callback(err);
      }

      spidering.set(url, true);

      return download(url, filename, (err, body) => {
        if (err) {
          return callback(err);
        }
        spiderLinks(url, body, nesting, callback);
      });
    }
    spiderLinks(url, body, nesting, callback);
  });
}

spider(process.argv[2], 1, (err, filename, downloaded) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  else if (downloaded) {
    console.log(`Completed the download of "${filename}"`);
  }
  else {
    console.log(`"${filename}" was already downloaded`);
  }
});