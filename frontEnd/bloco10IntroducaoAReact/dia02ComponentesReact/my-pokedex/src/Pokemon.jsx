import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { itsName, itsType, itsWeight, itsImage } = this.props;
    return (
      <div>
        <p>{ itsName }</p>
        <p>{ itsType }</p>
        <p>{ `${itsWeight.value}${itsWeight.measurementUnit}` }</p>
        <img src={ itsImage } alt={ `Imagem do pokemon: ${itsName}` } />
      </div>
    )
  }
}

Pokemon.propTypes = {
  itsName: PropTypes.string.isRequired,
  itsType: PropTypes.string.isRequired,
  itsImage: PropTypes.string.isRequired,
  itsWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
