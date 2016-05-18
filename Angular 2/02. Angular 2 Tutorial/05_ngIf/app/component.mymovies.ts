import { Component } from '@angular/core';

@Component({
  selector: 'myMovies',
  template:`
    <h1>Top movies trending</h1>
    <ul>
    <li>Deadpool</li>
    <li>Batman vs Superman</li>
    <li>Inception</li>
    <li>Interstellar</li>
    </ul>`,
  styles: ['./app/style.css']
})

export class myMoviesComponent {

}
