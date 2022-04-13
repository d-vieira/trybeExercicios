import React, { Component } from 'react';

class MyInput extends Component {
  render() {

    const { value, type, name, inputChange } = this.props;

    return (

      <label htmlFor={ name }>
        { name.toUpperCase() }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ inputChange }
        />
      </label>

    );
  }
}

export default MyInput;