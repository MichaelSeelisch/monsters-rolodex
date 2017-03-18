const { MongoClient } = require('mongodb'); 
const { graphql } = require('graphql');
const readline = require('readline');
const assert = require('assert');
const graphqlHTTP = require('express-graphql'); 
const express = require('express'); 

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mySchema = require('./schema/main'); 
const MONGO_URL = 'mongodb://localhost:27017/test';

const app = express();

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err); 
  console.log('Connected to MongoDB server');

  app.use('/graphql', graphqlHTTP({ 
    schema: mySchema, 
    context: { db },
    graphiql: true
  }));

  app.listen(3000, () => 
    console.log('Running Express.js on port 3000') 
  );
});

