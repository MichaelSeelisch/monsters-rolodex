import {Component, ViewEncapsulation} from '@angular/core';
// import {myMoviesComponent} from './component.mymovies';

@Component({
  selector: 'myShop',
  template: `<h1>Welcome to my shop!</h1>
  <p>We've the following movies available:</p>

  <ul>
    <li *ngFor="let movie of movieList" (click)="selectedMovie(movie)">{{movie}}</li>
  </ul>

  Recently added movie: {{recentMovie}}<br>
  Cart:
  <ul>
    <li *ngFor="let item of cart">{{item}}</li>
  </ul>
  `

  /*
    <ul>
      <li *ngFor="#movie of movieList">{{movie}}</li>
    </ul>
  */
})

export class myShopComponent {
  public recentMovie = 'None';
  public cart = [];
  public movieList = ['Batman Vs Superman', 'Civil War', 'Deadpool'];

  selectedMovie(movie) {
    this.cart.push(movie);
    this.recentMovie = movie;
  }
}
