import './App.css';
import Recepie from './Recepie'
import React, {useEffect, useState} from 'react';

function App() {

  const APP_ID = '549bd8c7'
  const APP_KEY = 'b518207eab58547073554d6aae258838'

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState('');
  const [Query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecepies();
  }, [Query]);
  

  const getRecepies = async () =>  {
    const response = await fetch(`https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecepies(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button  className="search-button" type="submit">Search</button>
      </form>
      {/*  <h1 onClick={ () => setCounter(counter+1)}>{counter}</h1>*/}
      <div className="recipes">
        {recepies.map(recepie => (
          <Recepie
          key={recepie.recipe.label}
          title={recepie.recipe.label}
          calories={recepie.recipe.calories}
          image={recepie.recipe.image}
          ingredients={recepie.recipe.ingredients}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
