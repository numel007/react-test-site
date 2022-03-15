import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const app = express();
const PORT = 4000;

// Possible queries
const typeDefs = gql`
	type Query {
		hello: String!
	}
`;

// Query resolvers
const resolvers = {
	Query: {
		hello: () => 'hello response here',
	},
};

// Apollo server must await start before applying middleware
const startApolloServer = async (typeDefs, resolvers) => {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	server.applyMiddleware({ app });
};

// Start Apollo server
startApolloServer(typeDefs, resolvers);

app.listen({ port: PORT }, () => {
	console.log(`Server running on port ${PORT}`);
});
