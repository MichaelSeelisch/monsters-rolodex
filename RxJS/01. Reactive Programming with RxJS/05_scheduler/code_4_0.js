/* Default Scheduler
 * The default Scheduler never blocks the event loop, so it’s ideal for operations that involve time,
 * like asynchronous requests. It can also be used in Observables that never complete,
 * because it doesn’t block the program while waiting for new notifications (which may never happen).
 */
console.log('Before subscription');

Rx.Observable.range(1, 5)
.do(function(value) {
  console.log('Processing value', value);
})
.observeOn(Rx.Scheduler.default)
.map(function(value) {
  return value * value;
})
.subscribe(function(value) {
  console.log('Emitted', value)
});

console.log('After subscription');
