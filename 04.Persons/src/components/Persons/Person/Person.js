import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.deleted}>My name is {props.name} and i am {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;