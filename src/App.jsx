import PokemonCard from "./Components/PokemonCard";
import './App.css';
import './main.jsx';
import './index.css';
import { useState } from "react";
import Button from "./Components/NavBar";

function App() {
  const[pokemonIndex, setPokemonIndex] = useState(0)
  const handleclick = (index) =>{
    setPokemonIndex(index)
  }
  return (
    <div>
        <Button
          pokemonlist={pokemonList}
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
          click={handleclick}
          pokemonLength={pokemonList.length -1} />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
    );
}



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;