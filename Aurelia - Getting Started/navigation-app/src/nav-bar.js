import {Behavior} from 'aurelia-framework';

export class NavBar {
  static metadata(){ return Behavior.withProperty('router'); }

  /* Custom Element called 'navbar'
  	static metadata(){ return Behavior.withProperty('router').customElement('navbar'); }
  */

  /* Custom Element witout a view
  	static metadata(){ return Behavior.withProperty('router').noView();
  */
}