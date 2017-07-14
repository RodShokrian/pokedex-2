import { values } from 'lodash';

// export const selectAllPokemon = (state) => {
//   const allPokemons = [];
//
//   Object.keys(state.pokemon).forEach((id) => {
//     allPokemons.push(state.pokemon[id]);
//   });
//
//   return allPokemons;
// };

export const selectAllPokemon = ({ pokemon }) => values(pokemon.entities);
export const selectCurrentPokemon = ( {pokemon} ) =>{
    // debugger;
    return pokemon.entities[pokemon.currentPoke];
 };

window.selectAllPokemon = selectAllPokemon;
