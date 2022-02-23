import React from 'react';
import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipesList() {
	return (
		<div className="RecipesList">
			<RecipeCard name="Test1" servings="Servings1" />
			<RecipeCard name="Test2" servings="Servings2" />
			<RecipeCard name="Test3" servings="Servings3" />
			<RecipeCard name="Test4" servings="Servings4" />
		</div>
	);
}

export default RecipesList;
