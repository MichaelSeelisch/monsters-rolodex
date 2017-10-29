import * as express from 'express';
import * as simpleHandler from './SimpleModuleHandler';

let app = express();

app.get('/', simpleHandler.processRequest);

app.listen(3000, () => {
  console.log(`Listening on  http://localhost:3000 ...`);
});