import {Component, ViewEncapsulation} from '@angular/core';
// import {myMoviesComponent} from './component.mymovies';

@Component({
  selector: 'myShop',
  template: `<h1>Welcome to my shop!</h1>
  <p>We've the following movies available:</p>

  <div *ngIf="premiumAccount === true">You are not eligible for this movie.</div>`

})

export class myShopComponent {
  premiumAccount = true;
}
