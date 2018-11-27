import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:26},
      {name:'John',age:24}

    ],
    otherState: 'Some value'
  }
  switchNameHandler = () => {
    //console.log('clicked');
    this.setState({
      persons:[
      {name:'Maxmillion',age:28},
      {name:'Manu',age:26},
      {name:'John cena',age:64}
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1> Indiamart Web App</h1>
       <button onClick={this.switchNameHandler}>Switch Name </button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
       
      </div>
    );
   // return React.createElement('div', {className:'App'},React.createElement('h1', null, 'Does is this work now?'));
  }
}

export default App;
