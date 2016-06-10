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
    function LoginForm() {
    }
    LoginForm = __decorate([
        core_1.Component({
            templateUrl: './app/templates/loginForm.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginForm);
    return LoginForm;
}());
exports.LoginForm = LoginForm;
var data = {};
constructor(private, _router, router_deprecated_1.Router);
{ }
;
formSubmit();
{
    var uname = this.data.username || '';
    var pass = this.data.password || '';
    var key = btoa(btoa(uname) + '??' + btoa(pass)); // => Chrome internal base64 encryption function
    console.log(this.data);
    console.log(key);
    if (uname === "admin" && pass === "admin") {
        this._router.navigate(['AdminArea']);
    }
    else {
    }
}
//# sourceMappingURL=component.login.js.map