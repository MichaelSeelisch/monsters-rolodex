import Controller from './lib/controller';
import nunjucks from 'nunjucks';

function getName(context) {
  // Default values
  let name = {
    fname: 'Rick',
    lname: 'Sanchez'
  };

  // Split path params
  let nameParts = context.params.name ? context.params.name.split('/') : [];

  /* Order of precedence
   * 1. Path param
   * 2. Query param
   * 3. Default Value
   */
   name.fname = (nameParts[0] || context.query.fname) || name.fname;
   name.lname = (nameParts[1] || context.query.lname) || name.lname;

   return name;
}

export default class HelloController extends Controller {

  toString(callback) {
    nunjucks.render('hello.html',
      getName(this.context), (err, html) => {
        if (err) {
          return callback('' + err, null);
        }

        callback(null, html);
      });
  }
}
