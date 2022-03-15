const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Schema construction
const schema = buildSchema(`
type Query {
  testing: String
}`);

// Endpoint resolvers
const root = {
	testing: () => {
		return 'This is the test string';
	},
};

const app = express();
app.use('/graphql', graphqlHTTP({ schema: schema, rootValue: root, graphiql: true }));

app.listen(3000);
