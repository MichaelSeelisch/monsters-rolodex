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
// import {myMoviesComponent} from './component.mymovies';
var myShopComponent = (function () {
    function myShopComponent() {
        this.movieList = ['Batman Vs Superman', 'Civil War', 'Deadpool'];
    }
    myShopComponent = __decorate([
        core_1.Component({
            selector: 'myShop',
            template: "<h1>Welcome to my shop!</h1>\n  <p>We've the following movies available:</p>\n\n  <div>\n    <p *ngFor=\"#movie of movieList; #i = index\">{{i}}. {{movie}}</p>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], myShopComponent);
    return myShopComponent;
}());
exports.myShopComponent = myShopComponent;
//# sourceMappingURL=component.index.js.map