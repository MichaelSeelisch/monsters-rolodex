define(["require", "exports", "./lib/Module1", "./lib/Module1", "./lib/Module1", "./lib/Module2", "./lib/Module2"], function (require, exports, Module1_1, Module1_2, Module1_3, Module2_1, Module2_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("hello commonjs");
    var mod1 = new Module1_1.Module1();
    mod1.print();
    var m1mod1 = new Module1_2.Module1();
    mod1.print();
    var nm = new Module1_3.NewModule();
    nm.print();
    var implementInterface = {
        id: 1,
        name: 'test'
    };
    var m2default = new Module2_1.default();
    m2default.print();
    var m2renamed = new Module2_2.default();
    m2renamed.print();
});
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
