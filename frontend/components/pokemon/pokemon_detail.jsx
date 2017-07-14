import React from 'react';
import { Route, Link } from 'react-router-dom';
import PokemonItemContainer from './pokemon_item_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestAPokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    if (this.props.pokemon) {
      return (
      <div>
        <img src={this.props.pokemon.image_url} /><br></br>
        <span> {this.props.pokemon.name} </span><br></br>
        <span>Attack: {this.props.pokemon.poke.attack}</span><br></br>
        <span>Defense: {this.props.pokemon.poke.defense}</span><br></br>
        <Route path='/pokemon/:pokemonId/items/:itemId'  component={PokemonItemContainer}/>
        {this.props.pokemon.items.map(
          item =>  (
            <Link to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`}>
              <li className='poke-items'>{item.name}</li>
            </Link>
          )
        )}
      </div>
    );
    }
    return ( <div></div>);
  }
}

export default PokemonDetail;
