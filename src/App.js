import Axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const YOUR_APP_ID = "f72468eb";
  const YOUR_APP_KEY = "f694cc304967336b0432976d0ece3aab";
  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;
  const [recipes, setRecipes] = useState([]);

  const getRecipeInfo = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          className="app__input"
          placeholder="Type the Ingredient"
          autoComplete="Off"
        />
        <select className="app__healthLabels">
          <option value="vegan">vegan</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
