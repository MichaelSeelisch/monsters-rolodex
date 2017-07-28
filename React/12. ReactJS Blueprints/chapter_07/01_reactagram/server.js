'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const port = process.env.PORT || 8080;
const cors = require('cors');
const compiler = webpack(config);
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser');

let isProduction = process.env.NODE_ENV === 'production';

const router = express.Router();

const app = express();
app.use( bodyParser.json({ limit:'50mb' }) );
app.use(cors());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, "assets")));

cloudinary.config({
  cloud_name: 'eyeball-paul',
  api_key: '126628377821272',
  api_secret: '57pVT1NUxnaI11LyQjkmbq4-k3c'
});

let routes = function (app) {
  app.post('/upload', function(req, res) {
    cloudinary.uploader.upload(req.body.image, function(result) { 
      res.send(JSON.stringify(result));
    });
  });
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'assets','index.html'));
  });
}
routes(router);

app.use(router);
app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:', port);
});