import {requestAPokemon} from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonItem from './pokemon_item';

const mapStateToProps = ({items}) => ({
  items
});

const mapDispatchToProps = dispatch => ({
  requestAPokemon: id => dispatch(requestAPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem);
