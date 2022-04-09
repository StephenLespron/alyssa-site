import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
	return (
		<div className='navBar'>
			<div id='navHeader'>
				<h1>Quinntessence</h1>
				<h3>by Alyssa</h3>
			</div>
			<div id='linkTree'>
				<Link to='/'>Home</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</div>
	);
}

export default NavBar;
