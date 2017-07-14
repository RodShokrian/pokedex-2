import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, {entities: action.pokemon});
    case RECEIVE_A_POKEMON:
      let pokemon = merge({}, state, {entities: {[action.pokemon.poke.id]: action.pokemon}, currentPoke: action.pokemon.poke.id});
      return pokemon;
    default:
      return state;
  }
};
