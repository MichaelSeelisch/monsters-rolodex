System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorage;
    return {
        setters:[],
        execute: function() {
            LocalStorage = (function () {
                function LocalStorage() {
                }
                LocalStorage.prototype.getItem = function (key) {
                    if (localStorage[key]) {
                        return JSON.parse(localStorage[key]);
                    }
                    return null;
                };
                LocalStorage.prototype.setItem = function (key, item) {
                    localStorage[key] = JSON.stringify(item);
                };
                return LocalStorage;
            }());
            exports_1("LocalStorage", LocalStorage);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvY2FsLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQVdBLENBQUM7Z0JBVkMsOEJBQU8sR0FBUCxVQUFXLEdBQVc7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLE1BQU0sQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCw4QkFBTyxHQUFQLFVBQVEsR0FBVyxFQUFFLElBQVM7b0JBQzVCLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNILG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2xvY2FsLXN0b3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgZ2V0SXRlbTxUPihrZXk6IHN0cmluZyk6IFQge1xuICAgIGlmIChsb2NhbFN0b3JhZ2Vba2V5XSkge1xuICAgICAgcmV0dXJuIDxUPkpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gIH1cbn1cbiJdfQ==
