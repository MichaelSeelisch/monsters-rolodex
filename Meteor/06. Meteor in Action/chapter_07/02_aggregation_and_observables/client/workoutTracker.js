import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import './workoutTracker.html';

import { WorkoutsCollection } from '../collections/Workouts';

// For the limit parameter of the subscription, you want to use a Session variable with a default value of 10
Session.setDefault('limit', 10);


DistanceByMonth = new Mongo.Collection('distanceByMonth');

// Subscriptions
// Autorun creates a reactive context that renews the subscription if the limit changes
Tracker.autorun(function (computation) {
  Meteor.subscribe('workouts', {
    // The Session object is passed as the value for the limit
    limit: Session.get('limit')
  });
});

Template.workoutList.onCreated(function () {
  // Sets up the subscription
  this.subscribe('workouts');
});

Template.workoutList.helpers({
  workouts: function () {
    // Returns all workouts, newest first
    return WorkoutsCollection.find({}, {
      sort: {
        workoutAt: -1
      }
    });
  }
});

// Adding an event handler to increas the Session var 'limit' by 10
Template.workoutList.events({
  'click button.show-more': function (evt, tpl) {
    var newLimit = Session.get('limit') + 10;
    // Changing the limit in the reactive Session variable updates the subscription automatically
    Session.set('limit', newLimit);
  }
});

monthLabels = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'Mai',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

Template.distanceByMonth.helpers({
  month: function () {
    return DistanceByMonth.find({}, {
      sort: {
        _id: 1
      }
    });
  },
  translateMonth: function () {
    return monthLabels[this._id];
  }
});