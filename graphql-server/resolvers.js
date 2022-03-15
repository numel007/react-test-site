import { Recipe } from './models/Recipe';

export const resolvers = {
	// GET requests
	Query: {
		allRecipes: async () => {
			return await Recipe.find();
		},
		recipe: async (_, args) => {
			const { title } = args;
			return await Recipe.findOne({ title: title });
		},
	},

	// DB modification requests
	Mutation: {
		createRecipe: (_, { title }) => {
			const recipe = new Recipe({ title });
			return recipe.save();
		},
	},
};
