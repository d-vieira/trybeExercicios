import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fixacao from './Component';

// - 02
const Task = (...value) => {
  return (
    <li>{value}</li>
  );
}

class App extends Component {
  render() {
    const result = ['estudar', 'outra'];
    return <ul>
      {result.map((element) => <li>{element}</li>)}
    </ul>;
  }
}

export default App;
