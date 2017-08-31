"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// standard import module
var Module1_1 = require("./lib/Module1");
console.log("hello commonjs");
var mod1 = new Module1_1.Module1();
mod1.print();
// import and rename
var Module1_2 = require("./lib/Module1");
var m1mod1 = new Module1_2.Module1();
mod1.print();
// export as new name from module
var Module1_3 = require("./lib/Module1");
var nm = new Module1_3.NewModule();
nm.print();
var implementInterface = {
    id: 1,
    name: 'test'
};
// import default export
var Module2_1 = require("./lib/Module2");
var m2default = new Module2_1.default();
m2default.print();
// import default export and rename
var Module2_2 = require("./lib/Module2");
var m2renamed = new Module2_2.default();
m2renamed.print();
// tsc --init
// npm init
// typings init
// typings install dt~node --global --save
// var port = process.env.port || 1337;
// console.log(`serving on port ${port}`);
// import * as http from 'http';
//console.log(http);
// http.createServer( (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end(`hello node server`);
// }).listen(port);
