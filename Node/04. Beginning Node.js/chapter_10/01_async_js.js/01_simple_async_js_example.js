// An async function to load an item
function loadItem (id, cb) {
  setTimeout(function () {
    cb(null, { id: id });
  }, 500);
};

// When all items loaded
function itemsLoaded(err, loadedItems) {
  console.log('Do something with:', loadedItems);
};

// Load in parallel
var async = require('async'); async.parallel([
  function (cb) {
    loadItem(1, cb);
  },
  function (cb) {
    loadItem(2, cb);
  }
 ], itemsLoaded);