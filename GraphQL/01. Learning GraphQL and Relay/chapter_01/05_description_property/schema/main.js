const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const roll = () => Math.floor(6 * Math.random()) + 1;

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    },

    diceRoll: {
      description: '**Simulate** a dice roll determined by count',
      type: new GraphQLList(GraphQLInt),
      args: {
        count: {
          type: GraphQLInt,
          defaultValue: 2
        }
      },
      // First argument represents the parent object, here underscore, because we're not using it
      resolve: (_, args) => {
        let rolls = [];
        for (let i = 0; i < args.count; ++i) {
          rolls.push(roll());
        }
        return rolls;
      }
    },

    usersCount: {
      description: 'Total number of users in the database',
      type: GraphQLInt,
      resolve: (_, args, { db }) =>
        db.collection('users').count()
    }
  }
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;
