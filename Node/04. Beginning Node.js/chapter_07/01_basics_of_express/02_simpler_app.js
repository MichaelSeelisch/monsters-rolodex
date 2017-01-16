var express = require('express');
express()
    .use(function (req, res, next) {
        res.end('Hello Express!');
    })
    .listen(3000);