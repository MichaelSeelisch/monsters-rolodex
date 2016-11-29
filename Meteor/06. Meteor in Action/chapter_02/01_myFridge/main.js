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