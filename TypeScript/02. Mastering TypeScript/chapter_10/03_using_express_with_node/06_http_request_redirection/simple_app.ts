import * as express from 'express';
import * as path from 'path';

import * as bodyParser from 'body-parser'; 
import * as cookieParser from 'cookie-parser'; 
import * as expressSession from 'express-session'; 

import * as Index from './routes/Index';
import * as Login from './routes/Login';

let app = express();

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cookieParser()); 
app.use(expressSession({ secret : 'asdf' }));

app.use('/', Index.router);
app.use('/', Login.router);

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
