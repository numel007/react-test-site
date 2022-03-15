import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Query {
		hello: String!
	}
	type Recipe {
		id: ID!
		title: String!
	}
	type Mutation {
		createRecipe(title: String!): Recipe!
	}
`;
