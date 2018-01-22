import React, { Component } from 'react';
import Currency from './Currency';

export default class Converter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eur: 0,
            usd: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if (e.target.value === '') {
            return;
        }

        const value = Number(e.target.value);

        this.setState({
            eur: this.convert(value, e.target.name, 'eur'),
            usd: this.convert(value, e.target.name, 'usd')
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    convert(value, from, to) {
        const conversionTable = {
            eur: 1,
            usd: 1.16
        };

        return value / conversionTable[from] * conversionTable[to];
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Currency
                    onChange={this.handleChange}
                    value={this.state.eur}
                    name='eur' />
                <Currency
                    onChange={this.handleChange}
                    value={this.state.usd}
                    name='usd' />
            </form>
        )
    }
}