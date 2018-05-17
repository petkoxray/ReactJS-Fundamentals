import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubsctractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul style={{ listStyle: 'none' }}>
                    {this.props.results.map(result => {
                        return <li key={result.id} onClick={() => this.props.onRemoveResult(result.id)}>
                            <strong>{result.value}</strong>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubsctractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 10 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onRemoveResult: (id) => dispatch({ type: actionTypes.REMOVE_RESULT, value: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);