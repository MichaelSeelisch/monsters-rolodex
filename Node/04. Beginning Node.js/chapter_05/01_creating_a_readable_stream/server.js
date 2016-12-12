/* 
 * Creating Your Own Stream:
 * This listing is a simple example of a readable stream that returns 1-1000.
 * If you run this, you will see all these numbers printed (as we pipe to stdout).
 * You implement the _read member in your class, which is called by the stream API internally when someone requests data to be read. 
 */

var Readable = require('stream').Readable;
var util = require('util');

function Counter() {
  Readable.call(this);
  this._max = 1000;
  this._index = 1;
}

util.inherits(Counter, Readable);

Counter.prototype._read = function() {
  var i = this._index++;
  if (i > this._max) {
    this.push(null);
  }
  else {
    var str = ' ' + i;
    this.push(str);
  }
};

// Usage, same as any other Readable stream
var counter = new Counter();
counter.pipe(process.stdout);