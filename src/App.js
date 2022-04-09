import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './Components/Home.js';
import Blog from './Components/Blog.js';
import Contact from './Components/Contact.js';
import NavBar from './Components/NavBar/NavBar.js';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='blog' element={<Blog />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
