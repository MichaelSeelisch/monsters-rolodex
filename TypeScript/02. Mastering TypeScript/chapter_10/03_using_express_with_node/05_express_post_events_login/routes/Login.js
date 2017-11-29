"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.router = router;
router.get('/login', function (req, res, next) {
    res.render('login', {
        title: 'Express login'
    });
});
router.post('/login', function (req, res, next) {
    if (req.body.name.length > 0) {
        req.session['username'] = req.body.username;
        res.redirect('/');
    }
    else {
        res.render('login', {
            title: 'Express',
            ErrorMessage: 'Please enter a user name'
        });
    }
});
