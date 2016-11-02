import Application from './lib/index.client';
import HelloController from './HelloController';

const application = new Application({
    '/hello/{name*}': HelloController
  }, {
    // Query selector for the element in which the controller response should be injected
    target: 'body'
  }
);

application.start();
