import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import { register } from '../../../api/users';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: '',
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

        if (this.state.password !== this.state.repeat) {
            this.setState({
                error: {
                    message: 'Check the form for errors',
                    errors: {
                        repeat: "Passwords don't match"
                    }
                }
            });
            return;
        }

        const res = await register(this.state.name, this.state.email, this.state.password);

        if (!res.success) {
            this.setState({ error: res });
            return;
        }

        this.props.history.push('/login');
    }

    render() {
        let errors = null;

        if (this.state.error) {
            errors = (
                <div>
                    <h3 className="errorMessage">{this.state.error.message}</h3>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p style={{ color: 'red' }} key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }

        return (
            <div className="container">
                <h1>Register</h1>
                {errors}
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
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
                    <Input
                        name="repeat"
                        type="password"
                        value={this.state.repeat}
                        onChange={this.onChangeHandler}
                        label="Repeat password"
                    />
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}