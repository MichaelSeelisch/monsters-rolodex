import {Component, ViewEncapsulation} from '@angular/core';
import {myMoviesComponent} from './component.mymovies';

@Component({
  selector: 'myShop',
  template: `<h1>Welcome to my shop!</h1>
  <p>We've the following movies available:</p>
  <myMovies></myMovies>`,
  directives: [myMoviesComponent],
  styles: [`
    h1 {
      text-align: center;
    }
    p {
      background: black;
      color: white;
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class myShopComponent {

}
