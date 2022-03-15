import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';
import mongoose from 'mongoose';

const startApolloServer = async () => {
	const app = express();
	const PORT = 4000;
	const server = new ApolloServer({ typeDefs, resolvers });

	// Must await Apollo server start before applying middleware
	await server.start();
	server.applyMiddleware({ app });

	// Connect to mongodb
	await mongoose.connect('mongodb://localhost:27017/recipeDB', { useNewUrlParser: true });

	app.listen({ port: PORT }, () => {
		console.log(`Server running on port ${PORT}`);
	});
};

// Start Apollo server
startApolloServer(typeDefs, resolvers);
