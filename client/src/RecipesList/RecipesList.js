import React from 'react';
import { useState, useEffect } from 'react';
import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipesList() {
	const [recipes, setRecipes] = useState(null);
	useEffect(() => {
		fetch('http://localhost:3001/recipes/all')
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data);
			});
	}, []);

	if (recipes === null) {
		return null;
	}
	let recipesArr = recipes.map(({ id, name, servings }) => (
		<RecipeCard id={id} name={name} servings={servings} />
	));
	return <div className="RecipesList">{recipesArr}</div>;
}

export default RecipesList;
