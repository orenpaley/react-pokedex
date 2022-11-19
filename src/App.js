import Pokedex from './Pokedex';
import pokemon from './pokemon';
import Pokecard from './Pokecard';
import './App.css';

let charmander = pokemon[0]; 
console.log("charmander :" ,charmander)


function App() {
  console.log('TEST')
  console.log(pokemon[0])
  console.log("All PoKeMon", pokemon)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Pokecard pokemon={charmander} /> */}
        <Pokedex pokemon={pokemon} />
      </header>
      
    </div>
  );
}

export default App;
