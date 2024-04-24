function PokemonCard() {
  const pokemon = pokemonList[0] 
  
  return (
  <figure>
    {(pokemon.imgSrc !== undefined) ?(
      <img src={pokemon.imgSrc} alt="pokeImg" />) :(
        <p>???</p>)
    }
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
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

export default PokemonCard;