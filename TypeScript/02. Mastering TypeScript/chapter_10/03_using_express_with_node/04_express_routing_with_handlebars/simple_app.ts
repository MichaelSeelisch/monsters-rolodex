import * as express from 'express';
import * as path from 'path';

import * as Index from './routes/Index';
import * as Login from './routes/Login';

let app = express();

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs');

app.use('/', Index.router);
app.use('/', Login.router);

app.listen(3000, () => {
  console.log(`Listening on  http://localhost:3000 ...`);
});