import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className="Header">
			<Link to={`/`}>
				<h1>RECIPES SITE</h1>
			</Link>
			<p>Recipes subtitle</p>
		</div>
	);
}

export default Header;
