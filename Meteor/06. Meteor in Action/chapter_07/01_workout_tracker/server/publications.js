// You name a publication (here: 'workouts') in order to subscribe to it
Meteor.publish('workouts', function (options) {
  return WorkoutsCollection.find(qry, qryOptions);
});