/*** CUSTOM EVENT EMITTER ***/

var EventEmitter = require('events').EventEmitter;

// Custom Event(Emitter)
var channel = new EventEmitter();
channel.on('join', function() {
  console.log('Welcome!');
});

// Fire Event
channel.emit('join');