"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var LoginForm = (function () {
    function LoginForm(_router) {
        this._router = _router;
        this.formData = {
            username: '',
            password: ''
        };
    }
    ;
    LoginForm.prototype.formSubmit = function () {
        var uname = this.formData.username;
        var pass = this.formData.password;
        var base64_key = btoa(btoa(uname) + '??' + btoa(pass)); // => Chrome internal base64 encryption function
        console.log(this.formData);
        console.log(base64_key);
        if (uname === "admin" && pass === "admin") {
            this._router.navigate(['AdminArea']);
        }
        else {
        }
    };
    LoginForm = __decorate([
        core_1.Component({
            templateUrl: './app/templates/loginForm.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], LoginForm);
    return LoginForm;
}());
exports.LoginForm = LoginForm;
//# sourceMappingURL=component.logMeIn.js.map