import React from 'react';
import './RecipeCard.css';

function RecipeCard(props) {
	const { name, servings } = props;
	return (
		<div className="RecipeCard">
			<h1>{name}</h1>
			<h2>{servings}</h2>
		</div>
	);
}

export default RecipeCard;
