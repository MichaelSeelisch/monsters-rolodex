var events = require('events');
var eventEmitter = new events.EventEmitter;

eventEmitter.on('myCustomEvent', function(arg1, arg2) {
  console.log('Event Fired!');
  console.log(arg1 + arg2);
});


setTimeout(function() {
  eventEmitter.emit('myCustomEvent', 'String 1', ' and String 2');
}, 2000);
