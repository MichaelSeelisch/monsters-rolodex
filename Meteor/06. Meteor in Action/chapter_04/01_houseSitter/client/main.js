import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import './main.html';

import { HousesCollection } from '../collections/houses';

Tracker.autorun(function () {
  console.log('The selectedHouse ID is: ' + Session.get('selectedHouseId'));
});

Template.selectHouse.helpers({
  // Returns all documents from the collection
  houseNameId: function() {
    return HousesCollection.find({}, {});
  },
  isSelected: function() {
    return Session.equals('selectedHouseId', this._id) ? 'selected' : '';
  }
});

Template.selectHouse.events = {
  'change #selectHouse': function (event) {
    Session.set('selectedHouseId', event.currentTarget.value);
  }
};