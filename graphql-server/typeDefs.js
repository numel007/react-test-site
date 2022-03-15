import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Query {
		allRecipes: [Recipe!]
		recipe(name: String!): Recipe
	}
	type Recipe {
		id: ID!
		name: String!
		servings: String!
		ingredients: [[String!]]
		instructions: [String!]
	}
	type Mutation {
		createRecipe(
			name: String!
			servings: String!
			ingredients: [[String!]]
			instructions: [String!]
		): Recipe!
	}
`;
