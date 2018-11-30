import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/popup-box.css';
import './css/bootstrap.css';
//import './css/font-awesome.css';
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
       <Person />
       
      </div>
    );
   // return React.createElement('div', {className:'App'},React.createElement('h1', null, 'Does is this work now?'));
  }
}

export default App;
