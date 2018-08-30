import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxi';

const Cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  

  return (
    <Aux>
      <h1> Hi, I 'm a React APP</h1>
      <h2>{props.appTitle}</h2>
      <p className={assignedClasses.join(' ')}> This is working! </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
      <button onClick={props.login}>Log In</button>
    </Aux>
  );
};

export default Cockpit;
