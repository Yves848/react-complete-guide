import React from 'react';


const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click} >
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  );
};

export default person;