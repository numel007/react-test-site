import './App.css';
import './Header/Header';
import Header from './Header/Header';
import RecipesList from './RecipesList/RecipesList';
import Footer from './Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<RecipesList />
			<Footer />
		</div>
	);
}

export default App;
