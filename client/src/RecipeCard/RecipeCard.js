import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard(props) {
	const { name, servings, id } = props;
	return (
		<div className="RecipeCard">
			<Link to={`/details/${id}`}>
				<h1>{name}</h1>
			</Link>
			<h2>{servings}</h2>
		</div>
	);
}

export default RecipeCard;
