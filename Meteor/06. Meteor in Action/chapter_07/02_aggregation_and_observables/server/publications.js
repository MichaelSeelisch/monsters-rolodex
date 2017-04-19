import { check } from 'meteor/check';

import { WorkoutsCollection } from '../collections/Workouts';

// You name a publication (here: 'workouts') in order to subscribe to it
Meteor.publish('workouts', function (options) {
  check (options,
    {
      limit: Number
    }
  );

  var query = {};
  var queryOptions = {
    limit: options.limit,
    sort: { workoutAt: 1 } // Sort all DB-Entries by timestamp to ensure the limit starts from the newest
  }

  // Using the limit query options from MongoDB returns only a limited number of documents
  return WorkoutsCollection.find(query, queryOptions);
});

Meteor.publish('distanceByMonth', function () {
  var subscription = this;
  var initiated = false;

  // This object keeps track of all distances for each month
  var distance = {};

  // Because there's no official support for aggregation from Meteor, use the core Mongo driver
  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  // The aggregation settings create documents with the _id field equal to the month of the workoutAt field and the sum, of all distances of this month
  var pipeline = {
    $group: {
      _id: {
        $month: '$workoutAt'
      },
      distance: {
        $sum: '$distance'
      }
    }
  };

  // Create the aggregation
  db.collection('workouts').aggregate(
    pipeline,
    // Because you can't use asynchronous code in a publication, use Meteor.bindEnvironment
    Meteor.bindEnvironment(
      function (err, result) {
        console.log('result', result);
        _.each(result, function (r) {
          subscription.added('distanceByMonth', r._id, { distance: r.distance });
        })
      }
    )
  )

  var workoutHandle = WorkoutsCollection
    .find()
    .observeChanges({
      added: function (id, fields) {
        if (!initiated) {
          return;
        }

        // Create the ID of the document. The +1 comes from the month starting at index 0.
        idByMonth = new Date(fields.workoutAt).getMonth() + 1;

        // Update the distance for the month since a new workout was added.
        distance[idByMonth] += fields.distance;

        // Inform the client that the subscription was changed.
        subscription.changed('distanceByMonth', idByMonth, {
          distance: distances[idByMonth]
        })
      }
    });

    // The subscription is ready to send the data to the client
    subscription.ready();
})

// The subscription (or this) has an onStop callback that's fired whenever the client subscription is closed
subscription.onStop(function () {
  // The handle that's returned from the observerChanges() function is used to stop observing 
  workoutHandle.stop();
})
