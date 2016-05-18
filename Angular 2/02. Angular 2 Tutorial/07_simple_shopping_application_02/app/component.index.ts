import {Component, ViewEncapsulation} from '@angular/core';
// import {myMoviesComponent} from './component.mymovies';

@Component({
  selector: 'myShop',
  templateUrl: './app/templates/index.html',
  styleUrls: ['./app/css/myShopComponent.css']
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
