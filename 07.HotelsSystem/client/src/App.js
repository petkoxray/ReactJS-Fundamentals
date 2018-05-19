import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/shared/PrivateRoute/PrivateRoute';
import Header from './components/shared/Header/Header';
import RegisterPage from './components/AuthPages/RegisterPage/RegisterPage';
import LoginPage from './components/AuthPages/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import CreatePage from './components/CreatePage/CreatePage';
import DetailsPage from './components/DetailsPage/DetailsPage';

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
        <Header loggedIn={localStorage.getItem('authToken') !== null} onLogout={this.onLogout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/view/:page" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/create" component={CreatePage} />
          <PrivateRoute path="/details/:id" component={DetailsPage} />
        </Switch>
      </div>);
  }
}

export default withRouter(App);
