import Controller from './lib/controller';
import nunjucks from 'nunjucks';

function getName(context) {
  // Function body omitted for brevity
}

export default class HelloController extends Controller {

  toString(callback) {
    // Read template and compile using context object
    nunjucks.renderString('<p>Hello </p>',
      getName(this.context), (err, html) => {
        if (err) {
          return callback('' + err, null);
        }
        callback(null, html);
      }
    );
  }
}
