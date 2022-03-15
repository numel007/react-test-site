const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    testing: String
  }
`);

const rootValue = {
	testing: () => {
		return 'Test string here';
	},
};

graphql({
	schema,
	source: '{ testing }',
	rootValue,
}).then((res) => console.log(res));
