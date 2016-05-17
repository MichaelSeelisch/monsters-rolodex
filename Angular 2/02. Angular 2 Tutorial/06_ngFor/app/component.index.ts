import {Component, ViewEncapsulation} from '@angular/core';
// import {myMoviesComponent} from './component.mymovies';

@Component({
  selector: 'myShop',
  template: `<h1>Welcome to my shop!</h1>
  <p>We've the following movies available:</p>

  <div>
    <p *ngFor="#movie of movieList; #i = index">{{i}}. {{movie}}</p>
  </div>`

  /*
    <ul>
      <li *ngFor="#movie of movieList">{{movie}}</li>
    </ul>
  */
})

export class myShopComponent {
  public movieList = ['Batman Vs Superman', 'Civil War', 'Deadpool']
}
