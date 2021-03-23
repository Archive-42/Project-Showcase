import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imageUrl } from './config';
import { getOnePokemon } from './store/pokemon';

class PokemonDetail extends Component {
  async componentDidMount() {
    await this.loadPokemon();
  }

  async componentDidUpdate(oldProps) {
    const oldId = Number.parseInt(oldProps.match.params.id);
    const newId = Number.parseInt(this.props.match.params.id);
    if (oldId === newId) {
      return;
    }
    await this.loadPokemon();
  }

  async loadPokemon() {
    const { id } = this.props.match.params;
    this.props.getOnePokemon(id);
  }

  render() {
    const pokemon = this.props.current;
    if (!pokemon) {
      return null;
    }
    return (
      <div className="pokemon-detail">
        <div className={`pokemon-detail-image-background`}
             style={{backgroundImage: `url('${imageUrl}/images/${pokemon.type}.jpg')`}}>
          <div className="pokemon-detail-image"
               style={{backgroundImage: `url('${imageUrl}${pokemon.imageUrl}')`}}>
          </div>
          <h1 className="bigger">{pokemon.name}</h1>
        </div>
        <div className="pokemon-detail-lists">
          <div>
            <h2>Information</h2>
            <ul>
              <li><b>Type</b> {pokemon.type}</li>
              <li><b>Attack</b> {pokemon.attack}</li>
              <li><b>Defense</b> {pokemon.defense}</li>
              <li>
                <b>Moves</b>
                <ul>
                  {pokemon.moves.map(move =>
                    <li key={move}>{move}</li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>Items</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Happiness</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.items.map(item =>
                  <tr key={item.price * item.happiness}>
                    <td>
                      <img className="item-image" alt={item.imageUrl} src={`${imageUrl}${item.imageUrl}`} />
                    </td>
                    <td>{item.name}</td>
                    <td className="centered">{item.happiness}</td>
                    <td className="centered">${item.price}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    current: state.pokemon.current,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getOnePokemon: id => dispatch(getOnePokemon(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  PokemonDetail
);
