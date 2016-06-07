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
var MyShopComponent = (function () {
    function MyShopComponent() {
        this.recentMovie = 'None';
        this.cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.movieList = ['Batman Vs Superman', 'Civil War', 'Deadpool'];
    }
    MyShopComponent.prototype.selectedMovie = function (movie) {
        this.cart.push(movie);
        this.recentMovie = movie;
        alert(movie + 'was added to cart');
        localStorage.setItem('cartItems', JSON.stringify(this.cart));
    };
    MyShopComponent = __decorate([
        core_1.Component({
            templateUrl: './app/templates/index.html',
            styleUrls: ['./app/css/myShopComponent.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MyShopComponent);
    return MyShopComponent;
}());
exports.MyShopComponent = MyShopComponent;
//# sourceMappingURL=component.index.js.map