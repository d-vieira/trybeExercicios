import React, { Component } from 'react';
import MyInput from './InputDefault';

class RegisterManager extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countyOrState: '',
      houseType: '',
    };
  }

  changeInput = (event) => {
    const key = event.target.name;
    const { value } = event.target;
    this.setState({
      [key]: value,
    });
  }

  render () {
    const { name, email, cpf, address, city, countyOrState, houseType} = this.state;

    return (
      <section>
        <h2>Cadastre-se</h2>
        <form>
          <MyInput 
            name='name'
            type='text'
            value={ name }
            inputChange={ this.changeInput }
            maxlength='10'
          />
          <MyInput 
            name='email'
            type='email'
            value={ email }
            inputChange={ this.changeInput }
          />
          <MyInput 
            name='cpf'
            type='password'
            value={ cpf }
            inputChange={ this.changeInput }
          />

        </form>
      </section>

    );
  }
}

export default RegisterManager;