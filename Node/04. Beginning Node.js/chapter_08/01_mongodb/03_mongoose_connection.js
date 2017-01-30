var mongoose = require('mongoose');

// Define a Schema
var tankSchema = new mongoose.Schema({
  name: 'string',
  size: 'string'
});
tankSchema.methods.print = function () {
  console.log('I am', this.name, 'the', this.size);
};

// Compile it into a model
var Tank = mongoose.model('Tank', tankSchema);

mongoose.connect('mongodb://127.0.0.1:27017/demo');

var db = mongoose.connection;
db.once('open', function callback() {
  console.log('Connected!');
  db.close();
});

// Use the model
var tony = new Tank({
  name: 'Tony',
  size: 'Small'
});
tony.print(); // I am tony the small
tony.save(function (err) {
  // Chainable queries; The final query is sent to the server after you call the exec function
  Tank.findOne({
    name: 'Tony'
  })
  .exec(function (err, tank) {
    // You get a model instance all setup and ready!
    tank.print();

    db.collection('tanks')
      .drop(function () {
        db.close();
      });
  });
});

// Run:
// Run mongodb and run this JS file with node