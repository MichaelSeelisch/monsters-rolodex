import {Template} from 'meteor/templating';

import Items from '../api/items.js';

import './body.html';
import './test.html';

/*
  Template.body.helpers({
    hello: 'Hi World'
  });
*/

Template.body.helpers({
  items() {
    return Items.find({});
  }
});

/*
  // Ad items to DB

  $ meteor mongo
  meteor:PRIMARY> db.tasks.insert({ itemOne: { text:'hello', value:0}}, itemTwo: { text: 'hi', value: 0}});
*/

/*
  // Old JavaScript
  Template.body.events({
    'click .test': function(event) {
      console.log('hello');
    }
  });
*/

// ES2015
Template.body.events({
  'click .test'(event) {
    console.log('hello');
  }
});
