import Pokecard from "./Pokecard";

const Pokedex = (props) => {
  let {pokemon} = props;
  console.log('poke array', pokemon)
    return (<div>
             {pokemon.map(poke => { return <Pokecard key={poke.id} pokemon={poke}/> })}
            </div>)
 
};

export default Pokedex;
