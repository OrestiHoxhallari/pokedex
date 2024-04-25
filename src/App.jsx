import PokemonCard from "./Components/PokemonCard";
import './App.css';
import './main.jsx';
import './index.css';


function App() {
  return (
    <figure>
      <PokemonCard pokemon={pokemonList[0]} />
    </figure>

  );
  
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];




export default App;