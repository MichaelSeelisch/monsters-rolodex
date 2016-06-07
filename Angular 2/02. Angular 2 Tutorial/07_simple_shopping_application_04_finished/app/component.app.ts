import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {CartComponent} from './component.cart';
import {MyShopComponent} from './component.index';

@Component({
  selector: 'myShop',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app/css/myShopComponent.css'],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/',
    component: MyShopComponent,
    name: 'Homepage'
  },
  {
    path: '/cart',
    component: CartComponent,
    name: 'MyFirstCart'
  }
])

export class MyMainApp {}
