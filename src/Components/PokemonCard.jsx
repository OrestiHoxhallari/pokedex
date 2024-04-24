function PokemonCard({ pokemon }) {
  
  return (
  <figure>
    {(pokemon.imgSrc !== undefined) ?(
      <img src={pokemon.imgSrc} alt="" />) :(
        <p>???</p>)
    }
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
  </figure>
  );
}



export default PokemonCard;