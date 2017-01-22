const { MongoClient } = require('mongodb'); 
const { graphql } = require('graphql');
const readline = require('readline');
const assert = require('assert'); 

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mySchema = require('./schema/main'); 
const MONGO_URL = 'mongodb://localhost:27017/test';

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err); 
  console.log('Connected to MongoDB server'); 
 
  /*
    db.collection('users').count() 
      .then(usersCount => console.log(usersCount));
  */

  rli.question('Client Request: ', inputQuery => {
    graphql(mySchema, inputQuery, {}, { db })
      .then(result => {
        console.log('Server Answer :', result.data);
        db.close(() => rli.close());
      });
  });
});

