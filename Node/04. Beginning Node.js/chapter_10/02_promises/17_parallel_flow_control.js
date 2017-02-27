// Wait for all promises to finish:

var Q = require('q');

// An async function to load an item
var loadItem = Q.nbind(function (id, cb) {
    setTimeout(function () {
        cb(null, { id: id });
    }, 500);
});
    
Q.all([loadItem(1), loadItem(2)])
  .then(function (items) {
    console.log('Items:', items); // Items: [ { id: 1 }, { id: 2 } ]
  })
  .catch(function (reason) {
    console.log(reason)
  });
