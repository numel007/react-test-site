import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';
import mongoose from 'mongoose';
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const startServer = async () => {
	const app = express();
	const PORT = 4000;

	// Connect to mongodb
	await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	app.use(
		'/graphql',
		graphqlHTTP({
			schema: typeDefs,
			rootValue: resolvers,
			graphiql: true,
		})
	);

	app.listen({ port: PORT }, () => {
		console.log(`Server running on port ${PORT}`);
	});
};

// Start Apollo server
startServer();
