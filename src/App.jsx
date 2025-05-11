import { useState } from 'react'
import './App.css'

function Display() {
  

  return(
    <div className='displayBox'>
          <div className='app_title'>Cameroonian recipe finder</div>
          <RecipeSearchBar />
    </div>
  )
}


const recipes = [
   {plate:"Water fufu and Eru", recipe :"eru leaves are cooked in red oil with canda and crayfish."},
  { plate: "Fried Rice", recipe: "Cook rice. Stir fry with spices such as carrot,pepper etc." },
  { plate: "Egusi Soup", recipe: "Cook ground melon seeds with meat or fish,red oil and spices." },
  { plate: "Jollof Rice", recipe: "Cook rice in tomato stew with spices and meat." },
  { plate: "Ndole", recipe: "Cook with washed ndole leaves,groundnut,crayfish and meat" },
];

function RecipeSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundRecipe, setFoundRecipe] = useState(null);

  const handleSearch = () => {
    const result = recipes.find(item =>
      item.plate.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setFoundRecipe(result || null);
  };

  return (
    <div className="search-container">
      <h2>Recipe Search</h2>
      <input
        type="text"
        placeholder="Enter the cameroonian plate name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="search-button">
      Launch search by clicking
      </button>

      {foundRecipe ? (
        <div className="recipe-box">
          <h3>{foundRecipe.plate}</h3>
          <p>{foundRecipe.recipe}</p>
        </div>
      ) : searchTerm ? (
        <p className="no-result">No recipe found for "{searchTerm}"</p>
      ) : null}
    </div>
  );
}



function App() {

  return (
    <div className='app'>
      <Display />
    </div>
  )
}

export default App
