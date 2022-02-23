import React from 'react';
import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import data from '../data.json';

function RecipesList() {
	const recipes = data.map(({ name, servings }) => {
		return <RecipeCard key={name} name={name} servings={servings} />;
	});

	return <div className="RecipesList">{recipes}</div>;
}

export default RecipesList;
