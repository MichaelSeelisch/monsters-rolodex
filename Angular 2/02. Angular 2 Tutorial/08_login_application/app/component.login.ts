import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  templateUrl: './app/templates/loginForm.html',
  directives: [ROUTER_DIRECTIVES]
})

export class LoginForm {
  formData = {
    username: '',
    password: ''
  };

  constructor(private _router:Router) {};

  formSubmit() {
    var uname = this.formData.username;
    var pass = this.formData.password;
    var base64_key = btoa(btoa(uname) + '??' + btoa(pass)); // => Chrome internal base64 encryption function

    console.log(this.formData);
    console.log(base64_key);

    if(uname === "admin" && pass === "admin") {
      this._router.navigate(['AdminArea']);
    }
    else {
      // this._router.navigate(['DashboardArea']);
    }
  }
}
