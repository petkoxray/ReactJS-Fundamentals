import React, { Component } from 'react';
import { getPage } from '../../api/hotels';
import HotelsList from './HotelsList';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.page !== this.props.match.params.page) {
            this.getData(Number(nextProps.match.params.page));
        }
    }

    async getData(page = Number(this.props.match.params.page) || 1) {
        const data = await getPage(page);
        this.setState({ hotels: data });
    }

    render() {
        const page = Number(this.props.match.params.page) || 1;

        return (
            <div className="container">
                <h1>Last Hotels</h1>
                <p>Welcome to our site.</p>
                {this.state.hotels.length === 0 ?
                    <Spinner /> :
                    <HotelsList hotels={this.state.hotels} />}
                <ul className="pagination">
                    <li class="page-item">
                        {page > 1 && <Link className="page-link" to={'/view/' + (page - 1)}>&lt;</Link>}
                    </li>
                    <li class="page-item">
                        <Link className="page-link" to={'/view/' + (page + 1)}>&gt;</Link>
                    </li>
                </ul>
            </div>
        );
    }
}