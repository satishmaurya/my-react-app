import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Indiamart Web App</h1>
      <p> Something goes wrong!!</p>
      <Person/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m Indiamart!!'));*
  }
}

export default App;
