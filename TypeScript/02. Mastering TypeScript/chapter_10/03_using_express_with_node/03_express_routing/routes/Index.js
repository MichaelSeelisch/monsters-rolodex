"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.send("<h1>Index module processed: " + req.url + "</h1>");
});
