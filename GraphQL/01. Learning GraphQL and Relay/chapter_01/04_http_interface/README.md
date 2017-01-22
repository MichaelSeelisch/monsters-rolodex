Start Mongo:
$ mongod

Start Example:
$ node index.js

Request in Browser:
http://localhost:3000/graphql?query={usersCount}

Open GraphiQL Editor:
http://localhost:3000/graphql

=> Type in left window:
{
    Ctrl + Space to see a list of all fields that our GraphQL schema supports, 
    which are the three fields that we have defined so far (hello, diceRoll, and usersCount)
}