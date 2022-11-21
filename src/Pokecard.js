// Component for one pokemon card
// pokemon.keys -> {name, img, type, base_experience}



const Pokecard = ({pokemon}) => {
  return (
    <div className="Pokecard">
      <h2>{pokemon.name} </h2>
      <img src={pokemon.img} width="100 px" alt="" />
      <p>Type: {pokemon.type}</p>
      <p>Exp: {pokemon.base_experience}</p>
    </div>
  )
}

export default Pokecard

