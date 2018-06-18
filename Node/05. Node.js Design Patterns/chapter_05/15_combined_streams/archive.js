const fs = require('fs');
const combine = require('multipipe'); 

const compressAndEncryptStream = require('./combinedStreams').compressAndEncrypt; 
 
combine(
    fs.createReadStream(process.argv[3]) 
        .pipe(compressAndEncryptStream(process.argv[2])) 
        .pipe(fs.createWriteStream(process.argv[3] + ".gz.enc")))
    .on('error', err => { 
        // This error may come from any stream in the pipeline 
        console.log(err); 
    });
