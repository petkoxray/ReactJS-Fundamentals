import React from 'react';

const Cockpit = (props) => {
    const btnStyle = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    if (props.showPersons) 
        btnStyle.backgroundColor = 'red';

    return (
        <button style={btnStyle} onClick={props.toggle}>Toggle Persons</button>
    );
};

export default Cockpit;