import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import logo from './OfficialsbLogo.svg';

import LoggedIn from './SpofityApiTest/LoggedIn';
import SpotifyApiTest from './SpofityApiTest/SpotifyApiTest';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/" >
              <img src={logo} alt="SoundBridge" />
            </Link>
            <Link to="/login">
              <p>
                login
              </p>
            </Link>
          </div>
          <Route exact path="/login" component={SpotifyApiTest} />
          <Route exact path="/logged-in" component={LoggedIn} />
        </div>
      </Router>
    );
  }
}
