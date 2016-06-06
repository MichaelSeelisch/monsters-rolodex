import {Component} from '@angular/core';

@Component({
  template: `<div id="cart">
      <h3>Cart:</h3>
      <ul>
        <li *ngFor="let item of cart">{{item}}</li>
      </ul>
      </div>`
})

export class CartComponent {}
