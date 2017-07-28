define(["require", "exports", "./Module3"], function (require, exports, Module3_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export default class does not work.
    var Module1 = (function () {
        function Module1() {
        }
        Module1.prototype.print = function () {
            console.log("Module1.print()");
            var mod3 = new Module3_1.Module3();
            mod3.print();
        };
        return Module1;
    }());
    exports.Module1 = Module1;
    exports.NewModule = Module1;
});
