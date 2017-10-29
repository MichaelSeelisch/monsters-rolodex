import * as express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
  console.log(`Listening on  http://localhost:3000 ...`);
});