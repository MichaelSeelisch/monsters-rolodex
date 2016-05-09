import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: '<h1>Hello {{name}} from Angular 2! {{myArr}}</h1>'
  // template: '<h1>Hello {{name}} from Angular 2!</h1>'

  // template: '<button (mousemove)="mouseClicked()">I was clicked {{times}} times.</button>'
  // template: '<button (dblclick)="mouseClicked()">I was clicked {{times}} times.</button>'
  template: '<button (click)="mouseClicked($event)">I was clicked {{times}} times.</button>'
})
export class AppComponent {
  /*
    myArr = ['html', 'css', 'javascript'];
    name:string = "Mischi";
    constructor() {
      this.name = 'Mischi';
    }
  */

  times:number = 0;
  mouseClicked(event) {
    console.log(event);
    this.times++;
  }
}
