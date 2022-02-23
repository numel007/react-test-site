import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className="Header">
			<Link to={`/`}>
				<h1>React Recipe Test Site</h1>
			</Link>
			<p>
				<a href="https://github.com/numel007/recipes">Click for recipe repo</a>
			</p>
		</div>
	);
}

export default Header;
