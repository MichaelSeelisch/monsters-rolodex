const fs = require('fs');
const createLoggingWritable = require('./loggingWritable');

const writable = fs.createWriteStream('test.txt');
const writableProxy = createLoggingWritable(writable);

writableProxy.write('First chunk\n');
writableProxy.write('Second chunk\n');
writable.write('This is not logged\n\n');
writableProxy.end();
