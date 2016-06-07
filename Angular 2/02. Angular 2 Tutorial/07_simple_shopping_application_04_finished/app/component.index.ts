import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  templateUrl: './app/templates/index.html',
  styleUrls: ['./app/css/myShopComponent.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class MyShopComponent {
  public recentMovie = 'None';
  public cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  public movieList = ['Batman Vs Superman', 'Civil War', 'Deadpool'];

  selectedMovie(movie) {
    this.cart.push(movie);
    this.recentMovie = movie;

    alert(movie + 'was added to cart');

    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }
}
