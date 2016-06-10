import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {LoginForm} from './component.login';
import {AdminComponent} from './component.admin';

@Component({
  selector: 'root',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/',
    component: LoginForm,
    name: 'LoginForm'
  },
  {
    path: '/admin',
    component: AdminComponent,
    name: 'AdminArea'
  }
])

export class LoginApp {

}
