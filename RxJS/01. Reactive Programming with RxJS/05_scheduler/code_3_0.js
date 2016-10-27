/* Immediate Scheduler
 * The immediate Scheduler is very well suited for Observables that execute predictable and
 * not-very-expensive operations in each notification.
 * Also, the Observable has to eventually call onCompleted.
 */
console.log('Before subscription');

Rx.Observable.range(1, 5)
  .do(function(value) {
    console.log('Processing value', value);
  })
  .map(function(value) {
    return value * value;
  })
  .subscribe(function(value) {
    console.log('Emitted', value)
  });

console.log('After subscription');
