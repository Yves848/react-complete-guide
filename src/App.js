import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this,'Maximilian')} >Switch Name</button>
        <Person 
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age}
           changed={this.nameChangedHandler}>
        </Person>
        <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this,'Max!')}
           changed={this.nameChangedHandler}>
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}>
        </Person>
        
      </div>
    );
  }
}

export default App;
