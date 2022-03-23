import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard(props) {
	const { name, servings } = props;
	return (
		<div className="RecipeCard">
			<Link to={`/details/${name}`}>
				<h1>{name}</h1>
			</Link>
			<h4>Yield: {servings}</h4>
		</div>
	);
}

export default RecipeCard;
