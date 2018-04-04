"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const util = require("util");
let router = express.Router();
exports.router = router;
router.get('/', (req, res, next) => {
    res.render('index', { title: 'ExpressAurelia'
    });
});
router.get('/menuitems', (req, res, next) => {
    res.json({ menuItems: [
            { ButtonName: 'About' },
            { ButtonName: 'Contact' },
            { ButtonName: 'Login' }
        ] });
});
router.post('/login', (req, res, next) => {
    console.log(`login received : ${util.inspect(req.body, false, null)}`);
    res.sendStatus(200);
});
