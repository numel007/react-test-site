import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './RecipeDetails.css';

function RecipeDetails() {
	const params = useParams();
	const { id } = params;

	const [recipe, setRecipe] = useState(null);
	useEffect(() => {
		fetch(`https://recipes-api.dev.carblife.icu/recipes/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setRecipe(data);
			});
	}, []);

	if (recipe === null) {
		return null;
	}
	return (
		<div className="RecipeDetails">
			<h1>{recipe.name}</h1>
			<em>Yield: {recipe.servings}</em>
			<h3>INGREDIENTS</h3>
			<table className="ingredients">
				<tbody>
					<tr className="table-header">
						<th>Name</th>
						<th>Quantity</th>
					</tr>
					{recipe['ingredients'].map((ingredient, i) => {
						return (
							<tr key={`ingredient-${i}`} className="table-ingredient">
								<th>{ingredient[0]}</th>
								<th>{ingredient[1]}</th>
							</tr>
						);
					})}
				</tbody>
			</table>
			<h3>METHOD</h3>
			<ol className="method">
				{recipe['instructions'].map((instruction, i) => {
					return (
						<li key={`method-${i}`} className="instruction">
							{instruction}
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default RecipeDetails;
