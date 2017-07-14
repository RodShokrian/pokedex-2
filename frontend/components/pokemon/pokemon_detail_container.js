import {requestAPokemon} from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectCurrentPokemon} from '../../reducers/selectors';
const mapStateToProps = ({pokemon, items}) => ({
  pokemon: pokemon.entities[pokemon.currentPoke],
  items
});

const mapDispatchToProps = dispatch => ({
  requestAPokemon: id => dispatch(requestAPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
