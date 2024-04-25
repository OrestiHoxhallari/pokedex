import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string
  }).isRequired,
}

export default PokemonCard;