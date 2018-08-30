import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxi from '../hoc/Auxi';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {
          id: 1,
          name: 'Max',
          age: 28,
        },
        {
          id: 2,
          name: 'Manu',
          age: 29,
        },
        {
          id: 3,
          name: 'Stephanie',
          age: 26,
        },
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("[UPDATE App.js] Inside getDerivedStateFromProps", nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate");
  }

  componentDidUpdate(){
    
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = personIdex => {
    const persons = [...this.state.persons];
    persons.splice(personIdex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] Inside Render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Auxi>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Auxi>
    );
  }
}

export default withClass(App, classes.App);
