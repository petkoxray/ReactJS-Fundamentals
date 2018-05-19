import React, { Component } from 'react';
import { getDetails } from '../../api/hotels';
import ReviewSection from './Review/ReviewSection';
import Spinner from '../UI/Spinner/Spinner';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotel: false
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const hotel = await getDetails(Number(this.props.match.params.id));
        this.setState({ hotel });
    }

    render() {
        let main = <Spinner />;

        if (this.state.hotel) {
            const hotel = this.state.hotel;

            main = (
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <img className="img-fluid" alt={hotel.image} src={hotel.image} />
                        <h2>{hotel.name}</h2>
                        <h3>{hotel.location}</h3>
                        <p>{hotel.description}</p>
                        <p>Number of Rooms: {hotel.numberOfRooms}</p>
                        <p>Parking Slots: {hotel.parkingSlots}</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="container">
                <h1>Details Page</h1>
                {main}
                <ReviewSection hotelId={Number(this.props.match.params.id)} />
            </div>
        );
    }
}