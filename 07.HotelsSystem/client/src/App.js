import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';
import RegisterPage from './components/AuthPages/RegisterPage/RegisterPage';
import LoginPage from './components/AuthPages/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>);
  }
}

export default withRouter(App);
