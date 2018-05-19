import React from 'react';
import { Link } from 'react-router-dom';

const hotelCard = (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <img className="img-fluid" alt={props.image} src={props.image} />
                <p>{props.name} in {props.location}</p>
                <Link className="badge badge-primary" to={'/details/' + props.id}>View Details</Link>
            </div>
        </div>
    );
}

export default hotelCard;