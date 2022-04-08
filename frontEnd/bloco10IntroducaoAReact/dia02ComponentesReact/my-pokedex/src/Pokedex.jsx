import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <ul>
        {
          pokemons.map((pokemon, index) =>
           <li>
              <Pokemon
                key={ index }
                itsName={ pokemon.name }
                itsType={ pokemon.type }
                itsWeight={ pokemon.averageWeight }
                itsImage={ pokemon.image }
              />
            </li>
          )
        }
      </ul>
    )
  }
}

export default Pokedex;
