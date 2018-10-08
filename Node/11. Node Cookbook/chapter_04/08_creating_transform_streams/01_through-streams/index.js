const through = require('through2');

const upper = through((receivedStream, encoding, callback) => {
    callback(null, receivedStream.toString().toUpperCase())
});

process.stdin
    .pipe(upper)
    .pipe(process.stdout);
