import { Recipe } from './models/Recipe';

export const resolvers = {
	// GET requests
	Query: {
		hello: () => 'hello response here',
	},

	// DB modification requests
	Mutation: {
		createRecipe: (_, { title }) => {
			const recipe = new Recipe({ title });
			return recipe.save();
		},
	},
};
