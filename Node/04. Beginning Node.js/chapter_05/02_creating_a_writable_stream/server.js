/* 
 * Creating Your Own Stream:
 * Creating your own writable stream class is similar to how we created a readable stream.
 * You inherit from the Writable class and implement the _write method. 
 * The _write method is passed in a chunk that needs processing as its first argument.
 * The listing is a simple writable stream that logs to the console all the data passed in.
 * In this example, we simply pipe from the readable file stream to this writeable stream (Logger).
 */

var Writable = require('stream').Writable;
var util = require('util');

function Logger() {
  Writable.call(this);
}

util.inherits(Logger, Writable);

Logger.prototype._write = function(chunk) {
  console.log(chunk.toString());
};

// Usage, same as any other Writable stream
var logger = new Logger('hello');

var readStream = require('fs').createReadStream('message.txt');
readStream.pipe(logger);