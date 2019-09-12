import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoggedIn from './SpofityApiTest/LoggedIn';
import SpotifyApiTest from './SpofityApiTest/SpotifyApiTest';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/" >
              <h1 className="soundbridge-title">
                SoundBridge
              </h1>
            </Link>
            <Link to ="/login">
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
