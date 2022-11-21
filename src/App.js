
import pokemon from './pokemon';
import Pokegame from './Pokegame';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Pokegame pokemon={pokemon}/> 
      </header>
    </div>
  );
}

export default App;
