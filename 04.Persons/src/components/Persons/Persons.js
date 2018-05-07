import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((p) => {
    return <Person
        name={p.name}
        age={p.age}
        key={p.id}
        changed={(event) => props.changed(event, p.id)}
        deleted={() => props.deleted(p.id)} />
});


export default Persons;