import {choice, remove} from "./helpers"
import Pokedex from "./Pokedex"

const Pokegame = ({pokemon}) => {
  const playerOne = []
  const playerTwo = []
  let count = 4
  const pokemonCopy = pokemon.map((p) => (p));

  while (count > 0) {
    const draw = choice(pokemonCopy)
    playerOne.push(draw)
    remove(pokemonCopy, draw)
    const draw2 = choice(pokemonCopy) 
    playerTwo.push(draw2)
    remove(pokemonCopy, draw2)
    --count;
  };
  
  // check who has more experience
  let p1Exp = 0
  for (let poke of playerOne) {
    p1Exp += poke.base_experience
  }
  let p2Exp = 0
  for (let poke of playerTwo) {
    p2Exp += poke.base_experience
  }
  const winner = p1Exp > p2Exp ? "Player One Wins!" :
                 p1Exp < p2Exp ? "Player Two Wins"  :          
                 "It's a Draw!"           
  return (
    <div>
    <div className="p1">
      <h2>Player One</h2>
      <Pokedex pokemon={playerOne} />
    </div>
    <div className="winner">
      <h3>{winner}</h3>
    </div>
    <div  className="p2">
      <h2>Player Two</h2>
      <Pokedex pokemon={playerTwo} />
    </div>
  </div>)
  
}

export default Pokegame;