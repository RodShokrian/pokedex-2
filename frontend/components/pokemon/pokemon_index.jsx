import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const path = new RegExp("/pokemon/*");
    if (this.props.pokemon.length !== 0 && path.test(this.props.location.pathname)) {
      return (
        <div>
          <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <ul>
            {this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>
        </div>
    );}

    return (
      <div>
        <ul>
            {this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>
        </div>
      );}
}

export default PokemonIndex;
