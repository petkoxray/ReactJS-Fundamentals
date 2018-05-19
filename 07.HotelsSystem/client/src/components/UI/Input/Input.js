import React from 'react';

const input = (props) => {
    const { name, type = 'text', value, onChange, label, className } = props;

    return (
        <div className="form-group col-md-4 offset-md-4 row">
            <label htmlFor="new-email">{label}</label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                value={value}
                className={`form-control ${className}`}  />
        </div >
    );
}

export default input;