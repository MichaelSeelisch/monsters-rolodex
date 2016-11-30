Products = new Mongo.Collection('products');

/*
  -> Insert in JS console in Browser:

  Products.insert({
    img: '/bread.png', 
    name: 'Bread',
    place: 'fridge'
  });

  Products.insert({
    img: '/juice.png', 
    name: 'Juice',
    place: 'supermarket'
  });

*/

if (Meteor.isClient) {

  Template.fridge.helpers({
    products: function() {
      return Products.find({
        place: 'fridge'
      });
    }
  });

  Template.productList.helpers({
    products: function() {
      return Products.find({
        place: 'supermarket'
      });
    }
  });

  $(function() {

    Template.fridge.onRendered(function() {
      var templateInstance = this;
      
      templateInstance.$('#fridge').droppable({
        drop: function(evt, ui) {
          // Get the database ID from the HTML attribute data-id.
          var query = {
            _id: ui.draggable.data('id')
          };

          // Set the update statement to set place to fridge
          var changes = {
            $set: {
              place: 'fridge'
            }
          };

          // Perform the database update
          Products.update(query, changes);
        }
      });
    });

    Template.productList.onRendered(function() {
      var templateInstance = this;
      
      templateInstance.$('#supermarket').droppable({
        drop: function(evt, ui) {
          // Get the database ID from the HTML attribute data-id.
          var query = {
            _id: ui.draggable.data('id')
          };

          // Set the update statement to set place to supermarket
          var changes = {
            $set: {
              place: 'supermarket'
            }
          };

          // Perform the database update
          Products.update(query, changes);
        }
      });
    });


    Template.productListItem.onRendered(function() {
      var templateInstance = this;

      templateInstance.$('.draggable').draggable({
        cursor: 'move',
        helper: 'clone'
      });
    });

  });
}

if (Meteor.isServer) {
  // This gets executed whenever the server restarts
  Meteor.startup(function() {

    // Remove all products from the database
    Products.remove({});

    // Fill the database with some products
    Products.insert({
      name: 'Milk',
      img: '/milk.png',
      place: 'fridge'
    });

    Products.insert({
      name: 'Bread',
      img: '/bread.png',
      place: 'supermarket'
    });
  });
}