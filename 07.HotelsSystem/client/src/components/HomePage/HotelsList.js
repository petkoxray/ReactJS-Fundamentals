import React from 'react';
import HotelCard from './HotelCard';

const hotelsList = (props) => {
    return (
        <div className="row">
            {props.hotels.map(h => (
                <HotelCard
                    key={h.id}
                    id={h.id}
                    name={h.name}
                    location={h.location}
                    image={h.image} />
            ))}
        </div>
    );
}

export default hotelsList;
