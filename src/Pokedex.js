import Pokecard from "./Pokecard";
import { Grid } from "@mui/material";

// Component for array of pokemon cards
// pokemon -> [{pokemon1, pokemon2...}]
// pokemon.keys -> {id, name, type, base_experience}
const Pokedex = ({pokemon}) => {
    return (<Grid container spacing={3} className="Pokedex">
          {pokemon.map(poke => { 
                  return (
                    <Grid item xs={2}>
                      <div>
                    <Pokecard key={poke.id} pokemon={poke}/> 
                    </div>
                 </Grid>
                    )})}
          </Grid>)};

export default Pokedex;

 