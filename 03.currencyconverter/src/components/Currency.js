import React from 'react';

const Currency = (props) => {
    return (
        <div>
            <label>
                {props.name}
                <input onChange={props.onChange} value={props.value} name={props.name} />
            </label>
        </div>
    )
}

export default Currency;