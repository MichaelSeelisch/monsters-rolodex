db = connect("localhost:27017/mDB");

var obj1 = {
  name: 'Micha',
  website: 'michaelseelisch.de'
};
var obj2 = {
  name: 'Someone',
  website: 'somewhere.de'
};

//db.getSiblingDB('<mDB>')

db.mDB.insert([obj1, obj2]);

db.mDB.find().pretty();

/* Use Atom package "script" to run MongoDB shell */
