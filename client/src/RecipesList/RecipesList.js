import React from 'react';
import { useState, useEffect } from 'react';
import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useQuery, gql } from '@apollo/client';

const ALL_RECIPES_QUERY = gql`
	{
		getAllRecipes {
			name
		}
	}
`;

function RecipesList() {
	// REBUILD
	const { data, loading, error } = useQuery(ALL_RECIPES_QUERY);

	if (loading) return 'Loading...';
	if (error) {
		console.log(error);
		return <pre>{error.message}</pre>;
	}

	console.log(data);

	let recipesArr = data.map(({ id, name, servings }, i) => (
		<RecipeCard key={i} id={id} name={name} servings={servings} />
	));
	return <div className="RecipesList">{recipesArr}</div>;
}

export default RecipesList;
