const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
  GraphQLEnumType
} = require('graphql');

const roll = () => Math.floor(6 * Math.random()) + 1;

const exampleEmployee = {
  firstName: 'jane',
  lastName: 'doe'
};

const EmployeeType = new GraphQLObjectType({ 
  name: 'Employee', 
  fields: () => ({ 
    name: { 
      type: GraphQLString, 
      args: { 
        upperCase: { type: GraphQLBoolean } 
      },
      nameForCase: { 
        type: GraphQLString, 
        args: { 
          letterCase: { type: LetterCaseType } 
        }
      }, 
      resolve: (obj, args) => { 
        let fullName = `${obj.firstName} ${obj.lastName}`; 
        return args.upperCase ? 
           fullName.toUpperCase() : fullName; 
      } 
    }, 
    boss: { type: EmployeeType } 
  }) 
});

const LetterCaseType = new GraphQLEnumType({ 
  name: 'LetterCase',
  values: { 
    TITLE: { value: 'title' }, 
    UPPER: { value: 'upper' }, 
    LOWER: { value: 'lower' } 
  } 
});

const toTitleCase = str => { 
  return str.replace(/\w\S*/g, txt => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()); 
};

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
    },

    exampleEmployee: { 
      type: EmployeeType, 
      resolve: () => exampleEmployee 
    }
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;
