import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import { login } from '../../../api/users';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();

        const res = await login(this.state.email, this.state.password);

        if (!res.success) {
            this.setState({ error: res });
            return;
        }

        localStorage.setItem('authToken', res.token);
        this.props.history.push('/');
    }

    render() {
        let errors = null;

        if (this.state.error) {
            errors = (
                <div>
                    <h3 style={{color: 'red'}}>{this.state.error.message}</h3>
                    {this.state.error.errors && Object.keys(this.state.error.errors).map(k => {
                        return <p style={{color: 'red'}} key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }

        return (
            <div className="form group-row">
                <h1>Login</h1>
                {errors}
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        label="E-mail"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}