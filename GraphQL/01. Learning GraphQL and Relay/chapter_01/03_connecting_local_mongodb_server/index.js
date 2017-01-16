const { MongoClient } = require('mongodb'); 
const assert = require('assert'); 
 
const MONGO_URL = 'mongodb://localhost:27017/test';

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err); 
  console.log('Connected to MongoDB server'); 
 
  db.collection('users').count() 
    .then(usersCount => console.log(usersCount));
});