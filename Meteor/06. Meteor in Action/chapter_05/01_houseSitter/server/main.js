import { Meteor } from 'meteor/meteor';

import { HousesCollection } from '../collections/houses';

Meteor.startup(() => {
  
  // Check whether there are any entries in the collection yet
  if (HousesCollection.find().count() === 0) {
    
    // Define all fixtures as array elements
    var houses = [{
      name: 'Stephan',
      plants: [{
        color: 'red',
        instructions: '3 pots/week'
        }, {
        color: 'white',
        instructions: 'keep humid'
        }   
      ]}, {
      name: 'Manuel',
      plants: [{
        color: 'Red',
        instructions: '3 pots/week'
        }, {
        color: 'Yellow',
        instructions: 'keep humid'
      }]
      }];

    // Insert all objects from the houses array into the database
    while (houses.length > 0) {
      HousesCollection.insert(houses.pop());
    }

    console.log('Added fixtures');
  }
});
