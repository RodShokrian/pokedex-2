import { merge } from 'lodash';
import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_A_POKEMON:
    return action.pokemon.items;
  default:
    return state;
  }
};

export default itemReducer;
