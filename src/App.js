import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpotifyLoggedIn from './SpofityApiTest/SpotifyLoggedIn';
import SpotifyApiTest from './SpofityApiTest/SpotifyApiTest';
import Login from './SpofityApiTest/Login';
import UserPage from './SpofityApiTest/UserPage';

import './App.css';

import logo from './OfficialsbLogo.svg';

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
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/:name/:hasSpotify/:spotifyId" component={UserPage} />
          <Route exact path="/spotify-login" component={SpotifyApiTest} />
          <Route exact path="/spotify-logged-in" component={SpotifyLoggedIn} />
        </div>
      </Router>
    );
  }
}
