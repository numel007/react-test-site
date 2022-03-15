import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Query {
		allRecipes: [Recipe!]
		recipe(title: String!): Recipe
	}
	type Recipe {
		id: ID!
		title: String!
	}
	type Mutation {
		createRecipe(title: String!): Recipe!
	}
`;
