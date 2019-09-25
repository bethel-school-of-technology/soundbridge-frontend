import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Navbars/Footer';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import editProfile from './screens/editProfile';
import profile from './screens/profile';
// import UserPageNoSpotify from './components/SpofityApiTest/UserPageNoSpotify';
// import UserPage from './components/SpofityApiTest/UserPage';
// import SpotifyLoggedIn from './components/SpofityApiTest/SpotifyLoggedIn';



export default class App extends Component {

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
          {/* <Route exact path="/user/:name" component={UserPageNoSpotify} />
          <Route exact path="/user/:name/:hasSpotify/:spotifyId/:spotifyRefreshToken" component={UserPage} />
          <Route exact path="/spotify-logged-in/:accessToken/:refreshToken" component={SpotifyLoggedIn} /> */}
          <Route exact path="/profile" component={profile} />
          <Route exact path="/editProfile" component={editProfile} />
        </div>
        <Footer></Footer>
      </Router>

    );
  };
}
