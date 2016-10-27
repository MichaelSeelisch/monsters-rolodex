/* Current Thread Scheduler
 * The currentThread Scheduler is useful for operations that involve recursive operators like repeat,
 * and in general for iterations that contain nested operators.
 */
var scheduler = Rx.Scheduler.currentThread;

Rx.Observable.return(10, scheduler)
  .repeat()
  .take(1)
  .subscribe(function(value) {
    console.log(value);
  });
