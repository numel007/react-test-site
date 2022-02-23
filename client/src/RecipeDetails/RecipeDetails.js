import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function RecipeDetails(props) {
	const params = useParams();
	const { id } = params;

	const [recipe, setRecipe] = useState({});
	useEffect(() => {
		fetch(`http://localhost:3001/recipes/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setRecipe(data);
			});
	}, []);

	return (
		<div className="RecipeDetails">
			<h1>{recipe.name}</h1>
			<p>{recipe.servings}</p>
			<ol>
				{recipe['instructions']?.map((instruction) => {
					return <li>{instruction}</li>;
				})}
			</ol>
		</div>
	);
}

export default RecipeDetails;
