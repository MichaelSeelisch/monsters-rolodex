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
  'keyup input#house-name': function (evt) {
    evt.preventDefault();
    var modifier = {
      $set: {
        'name': evt.currentTarget.value,
        'status': 'unsaved'
      }
    };
    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  },

  'click button.addPlant': function (evt) {
    evt.preventDefault();
    var newPlant = {
      color: '',
      instructions: ''
    };
    var modifier = {
      $push: {
        'plants': newPlant
      },
      $set: {
        'status': 'unsaved'
      }
    };
    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  },

  'click button#save-house': function (evt) {
    evt.preventDefault();
    var id = Session.get('selectedHouseId');
    var modifier = {
      $set: {
        'lastsave': new Date(),
        'status': 'saved'
      }
    };
    updateLocalHouse(id, modifier);

    // Persist house document in remote db
    // Saves the local doc on the server
    HousesCollection.upsert(
      { _id: id },
      LocalHouse.findOne(id)
    );
  },
});

Template.houseForm.onCreated(function () {
  this.autorun(function () {
    // Check, if the doc already exists on the server and if it is newer.
    if (HousesCollection.findOne(Session.get('selectedHouseId')) &&
      LocalHouse.findOne(Session.get('selectedHouseId')).lastsave <
      HousesCollection.findOne(Session.get('selectedHouseId')).lastsave) {
        Session.set('notification', {
          type: 'warning',
          text: 'This document has been changed inside the database!'
        });
      }
      // Check, if the local document has an unsaved status
      else if (LocalHouse.findOne(Session.get('selectedHouseId')) &&
        LocalHouse.findOne(Session.get('selectedHouseId')).status === 'unsaved') {
          Session.set('notification', {
            type: 'reminder',
            text: 'Remember to save your changes'
          });
      }
      else {
        Session.set('notification', '');
      }
  })
});

// Global helper that returns the edit object
Template.registerHelper('selectedHouse', function () {
  return LocalHouse.findOne(Session.get('selectedHouseId'));
});

// Helper using Underscore.js to add an index attribute to arrays of objects
Template.registerHelper('withIndex', function (list) {
  // Underscore.js's map function is used to iterate over a list
  var withIndex = _.map(list, function (v, i) {
    if (v === null) {
      return;
    }
    v.index = i;
    return v;
  });
  return withIndex;
});

Template.plantFieldset.events({
  'click button.removePlant': function (evt) {
    evt.preventDefault();
    var index = evt.target.getAttribute('data-index');

    // All plants go into a regular array
    var plants = Template.parentData(1).plants;

    // Regular arrays can use splice to remove an element
    plants.splice(index, 1);

    var modifier = { 
      $set: {
        'plants': plants,
        'status': 'unsaved'
      }
    };

    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  },

  'keyup input.color, keyup input.instructions': function (evt) {
    evt.preventDefault();
    var index = evt.target.getAttribute('data-index');
    var field = evt.target.getAttribute('class');

    // Concat the exact identifier for the plant and property
    var plantProperty = 'plants.' + index + '.' + field;
    
    var modifier = { 
      $set: {}
    };

    // Assign the new value usign bracket notation
    modifier['$set'][plantProperty] = evt.target.value;
    modifier['$set'].status = 'unsaved';

    // Perform the update as always
    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  }
});

updateLocalHouse = function (id, modifier) {
  LocalHouse.update(
    {
      '_id': id
    },
    modifier
  );
};

Template.notificationArea.helpers({
  notification: function () {
    return Session.get('notification');
  }
});