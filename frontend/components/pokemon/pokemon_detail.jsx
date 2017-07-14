import React from 'react';


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
        {this.props.pokemon.items.map(item => <li className='poke-items'>{item.name}</li>)}
      </div>
    );
    }
    return ( <div></div>);
  }
}

export default PokemonDetail;
