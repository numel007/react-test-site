import React from 'react';
import { useState, useEffect } from 'react';
import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipesList() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/recipes/all')
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data);
			});
	}, []);

	return (
		<div className="RecipesList">
			{recipes.map(({ id, name, servings }) => (
				<RecipeCard id={id} name={name} servings={servings} />
			))}
		</div>
	);
}

export default RecipesList;
