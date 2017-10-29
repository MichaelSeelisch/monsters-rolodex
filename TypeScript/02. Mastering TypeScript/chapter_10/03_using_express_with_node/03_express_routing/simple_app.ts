import * as express from 'express';

import * as Index from './routes/Index';
import * as Login from './routes/Login';

let app = express();

app.use('/', Index.router);
app.use('/', Login.router);

app.listen(3000, () => {
  console.log(`Listening on  http://localhost:3000 ...`);
});