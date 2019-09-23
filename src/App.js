import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbars/Navbar';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './components/SpofityApiTest/Login';
import SignUp from './screens/SignUp';
import SpotifyLoggedIn from './components/SpofityApiTest/SpotifyLoggedIn';
import UserPage from './components/SpofityApiTest/UserPage';
import UserPageNoSpotify from './components/SpofityApiTest/UserPageNoSpotify';


export default class App extends Component{

render() {
  return (

    <Router>
    <div className="App">
    <Navbar></Navbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/user/:name" component={UserPageNoSpotify} />
      <Route exact path="/user/:name/:hasSpotify/:spotifyId/:spotifyRefreshToken" component={UserPage} />
      <Route exact path="/spotify-logged-in/:accessToken/:refreshToken" component={SpotifyLoggedIn} />
    </div>
    </Router>

  );
};

}
