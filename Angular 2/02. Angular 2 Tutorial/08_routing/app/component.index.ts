import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { CartComponent } from './component.cart';

@Component({
  selector: 'myShop',
  templateUrl: './app/templates/index.html',
  styleUrls: ['./app/css/myShopComponent.css'],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/cart', component: CartComponent }
])

export class MyShopComponent {
  public recentMovie = 'None';
  public cart = [];
  public movieList = ['Batman Vs Superman', 'Civil War', 'Deadpool'];

  selectedMovie(movie) {
    this.cart.push(movie);
    this.recentMovie = movie;
  }
}
