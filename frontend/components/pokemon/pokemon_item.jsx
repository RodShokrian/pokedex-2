import React from 'react';

class PokemonItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  render () {
    debugger;
    return (
    <div>
      <ul>Items:
      </ul>
    </div>
  );}
}

export default PokemonItem;
