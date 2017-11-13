import * as express from 'express';

let router = express.Router();

router.get('/login', (req, res, next) => {
  res.send(`<h1>Login module processed: ${req.url}</h1>`);
});

export { router };