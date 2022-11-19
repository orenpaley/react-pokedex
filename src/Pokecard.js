const Pokecard = (props) => {
  console.log("pokecard:", props)
  return (
    <div>
      <h2>Name: {props.pokemon.name} </h2>
      <img src={props.pokemon.img} width="50 px" alt="" />
      <p>Type: {props.pokemon.type}</p>
      <p>Exp: {props.pokemon.base_experience}</p>
    </div>
  )
}

export default Pokecard

