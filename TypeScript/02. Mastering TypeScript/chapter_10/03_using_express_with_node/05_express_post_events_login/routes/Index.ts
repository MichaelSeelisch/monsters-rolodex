import * as express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', 
  {
    title: 'Express',
    // username: userName
  });
});

export { router };