import './App.css';
import './Header/Header';
import Header from './Header/Header';
import RecipesList from './RecipesList/RecipesList';

function App() {
	return (
		<div className="App">
			<Header />
			<RecipesList />
		</div>
	);
}

export default App;
