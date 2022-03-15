import { Recipe } from './models/Recipe';

export const resolvers = {
	// GET requests
	Query: {
		allRecipes: async () => {
			return await Recipe.find();
		},
		recipe: async (_, args) => {
			const { name } = args;
			return await Recipe.findOne({ name: name });
		},
	},

	// DB modification requests
	Mutation: {
		createRecipe: (_, args) => {
			const { name, servings, ingredients, instructions } = args;
			const recipe = new Recipe({
				name: name,
				servings: servings,
				ingredients: ingredients,
				instructions: instructions,
			});
			return recipe.save();
		},
	},
};
