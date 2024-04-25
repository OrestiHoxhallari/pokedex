

function Button({pokemonIndex, setPokemonIndex, pokemonLength}){
    
  const handleClick = () => {
    setPokemonIndex(pokemonIndex - 1)
    };
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex + 1) 
  };

return (
      <div>
      {pokemonIndex > 0 ? (<button onClick={handleClick}>Précédent</button>) : ("")}
      {pokemonIndex < pokemonLength ? (<button onClick={handleClick2}>Suivant</button>) : ("")}
      </div>
      );
}

export default Button