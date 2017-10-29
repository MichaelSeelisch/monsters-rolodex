import * as express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`<h1>Index module processed: ${req.url}</h1>`);
});

export { router };