import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import './main.html';

import { HousesCollection } from '../collections/houses';

LocalHouse = new Mongo.Collection(null);

var newHouse = {
  name: '',
  plants: [],
  lastsave: 'never',
  status: 'unsaved'
};

Session.setDefault('selectedHouseId', '');

Tracker.autorun(function () {
  console.log('The selectedHouse ID is: ' + Session.get('selectedHouseId'));
});

// Return all documents from the collection
Template.selectHouse.helpers({  
  houseNameId: function() {
    return HousesCollection.find({}, {
      fields: {
        name: 1, // 1 = Inclusion; 0 = Exclusion
        _id: 1
      }
    });
  },
  isSelected: function() {
    return Session.equals('selectedHouseId', this._id) ? 'selected' : '';
  }
});

// Returning a database document to a template based
Template.showHouse.helpers({
  house: function () {
    return HousesCollection.findOne({
      _id: Session.get('selectedHouseId')
    });
  }
});

Template.selectHouse.events = {
  'change #selectHouse': function (event) {
    var selectedId = event.currentTarget.value;
    // Insert a new doc or update if the _id exists
    var newId = LocalHouse.upsert(
      selectedId,
      // If no document was found, set reactiveHouseObject to the newHouse object
      HousesCollection.findOne(selectedId) || newHouse).insertId;
    
    // If no insert took place, you can use selectedId directly
    if (!newId) {
      newId = selectedId;
    }

    Session.set('selectedHouseId', newId);
  }
};

/*
  Template.showHouse.events({
    'click button#delete': function (evt) {

      // This is the current data context: the selected house document
      // You don’t have to capture the event and read out the data-id attribute as you did when you set a plant to a watered state.
      // You can directly access all information contained in the currently selected house document, including _id.
      var id = this._id;

      // Show a confirmation dialog before actually removing the document
      var deleteConfirmation = confirm('Really delete this house?');
      if(deleteConfirmation) {
        // Removes the document from the collection on BOTH client and server
        HousesCollection.remove(id);
      }
    }
  });
*/

Template.plantDetails.helpers({
  isWatered: function () {
    // Hardcoded: return Template.instance().watered.get() ? 'disabled': '';

    var plantId = Session.get('selectedHouseId') + '-' + this.color;
    return Session.get(plantId) ? 'disabled' : '';
  }
});

Template.plantDetails.onCreated(function () {
  // 'this' refers to the currently available data context (which happens to be the content of a single plants object)
  this.watered = new ReactiveVar();
  this.watered.set(false);
});

Template.plantDetails.events({
  // 'tpl' holds a reference to the template
  'click button': function (evt, tpl) {
    // Hardcoded: tpl.watered.set(true);
    
    // 'data-id' contains a unique ID for each plant, set automatically by Meteor system
    var plantId = $(evt.currentTarget).attr('data-id');
    
    // Set plant as 'watered'
    Session.set(plantId, true);

    // 'lastvisit' contains a current timestamp
    var lastvisit = new Date();
    HousesCollection.update({
        _id: Session.get('selectedHouseId')
      }, {
        $set: {
          // The lastvisit field inside the currently selected document is set to the current timestamp
          // The browser implementation Minimongo doesn’t support the full feature set provided by MongoDB. 
          // Therefore, using the $currentDate modifier isn’t possible on the client.
          lastvisit: lastvisit
        }
      }
    );
  }
});

Template.houseForm.events({
  'click button#saveHouse': function (evt) {
    evt.preventDefault();
    var houseName = $('input[id=house-name]').val();
    var plantColor = $('input[id=plant-color]').val();
    var plantInstrcutions = $('input[id=plant-instructions]').val();

    // Inserts a new document and assigns the return value to the 
    // selectedHouseId variable to immediately show the contents of the new document
    Session.set('selectedHouseId', HousesCollection.insert({
      name: houseName,
      plants: [{
        color: plantColor,
        instructions: plantInstrcutions
      }]
    }));

    // Empty the form
    $('input').val('');
  }
});

// Global helper that returns the edit object
Template.registerHelper('selectedHouse', function () {
  return LocalHouse.findOne(Session.get('selectedHouseId'));
})