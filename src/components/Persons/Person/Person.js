import React, { Component } from 'react';
import classes from './Person.css';
import withClass  from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxi'

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed} />
      </Aux>
    );
  }
};

export default withClass(Person,classes.Person);
