var subject = new Rx.BehaviorSubject('Waiting for content');

subject.subscribe(
    function onNext(result) {
        document.body.textContent = result.response || result;
    },
    function onError(err) {
        document.body.textContent = 'There was an error retrieving content';
    }    
);

Rx.DOM.get('/remote/content').subscribe(subject);