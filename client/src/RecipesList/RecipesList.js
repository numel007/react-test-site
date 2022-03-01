import React from 'react';
import { useState, useEffect } from 'react';
import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipesList() {
	const [recipes, setRecipes] = useState(null);
	useEffect(() => {
		async function loadData() {
			try {
				const res = await fetch('https://recipes-api.dev.carblife.icu/recipes/all');
				const data = await res.json();
				setRecipes(data);
			} catch (err) {
				console.log(err);
			}
		}
		loadData();
	}, []);

	if (recipes === null) {
		return null;
	}
	let recipesArr = recipes.map(({ id, name, servings }, i) => (
		<RecipeCard key={i} id={id} name={name} servings={servings} />
	));
	return <div className="RecipesList">{recipesArr}</div>;
}

export default RecipesList;
