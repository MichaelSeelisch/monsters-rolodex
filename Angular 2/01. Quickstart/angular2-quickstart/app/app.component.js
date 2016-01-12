(function(app) {
  app.AppComponent = ng.core
  	.Component({
      selector: 'my-app',
      template: '<h1 class="headline">My very First Angular 2 App</h1>',
      styles: [
          '.headline { color: red; }'
      ]
    })
    .Class({
      constructor: function() {},
      
      ngOnInit: function() {
          console.log('Angualr 2 App initialized!');
      }
    });
})(window.app || (window.app = {}));