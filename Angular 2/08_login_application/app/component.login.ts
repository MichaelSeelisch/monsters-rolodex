import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  templateUrl: './app/templates/loginForm.html',
  directives: [ROUTER_DIRECTIVES]
})

export class LoginForm {
  data = {};
  constructor(private _router:Router) {};

  formSubmit() {
    /*var uname = this.data.username;
    var pass = this.data.password;
    var key = btoa(btoa(uname) + '??' + btoa(pass)); // => Chrome internal base64 encryption function*/

    console.log(this.data);
    //console.log(key);

    //Cookie.setCookie('sessionID', key);

    /*if(uname === "admin" && pass === "admin") {
      this._router.navigate(['AdminArea']);
    }
    else {
      this._router.navigate(['DashboardArea']);
    }*/
  }
}
