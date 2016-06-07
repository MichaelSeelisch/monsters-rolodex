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
var component_cart_1 = require('./component.cart');
var component_index_1 = require('./component.index');
var MyMainApp = (function () {
    function MyMainApp() {
    }
    MyMainApp = __decorate([
        core_1.Component({
            selector: 'myShop',
            template: "<router-outlet></router-outlet>",
            styleUrls: ['./app/css/myShopComponent.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                component: component_index_1.MyShopComponent,
                name: 'Homepage'
            },
            {
                path: '/cart',
                component: component_cart_1.CartComponent,
                name: 'MyFirstCart'
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], MyMainApp);
    return MyMainApp;
}());
exports.MyMainApp = MyMainApp;
//# sourceMappingURL=component.app.js.map