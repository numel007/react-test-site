import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

const startApolloServer = async () => {
	const app = express();
	const PORT = 4000;
	const server = new ApolloServer({ typeDefs, resolvers });

	// Must await Apollo server start before applying middleware
	await server.start();
	server.applyMiddleware({ app });

	// Connect to mongodb
	await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	app.listen({ port: PORT }, () => {
		console.log(`Server running on port ${PORT}`);
	});
};

// Start Apollo server
startApolloServer(typeDefs, resolvers);
