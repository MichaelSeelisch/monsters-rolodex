"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        username: req.session['username']
    });
});
