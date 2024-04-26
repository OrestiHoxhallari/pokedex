

function Button({pokemonlist, click}){
    return (
      <div>
      {pokemonlist.map((pokemon, index) => {
      
      return (
        <button
        key={pokemon.name} onClick={() => click(index)} >
          {pokemon.name}
        </button>
      );
    })},
    </div>
    );
}

export default Button