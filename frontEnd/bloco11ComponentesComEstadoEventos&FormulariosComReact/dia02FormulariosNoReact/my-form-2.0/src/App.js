import React, { Component } from 'react';
import './App.css';
import RegisterManager from './forms-components/RegisterStateManager';
import Registro from './forms-components/Registro';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Exercícios 11.2!</h1>
        </header>
        
        <main>
          <RegisterManager />
        </main>

      </div>
      
    );
  }
}

export default App;
