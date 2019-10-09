import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Navbars/Footer';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import navProfile from './screens/navProfile';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import editProfile from './screens/editProfile';
import Profile from './screens/Profile';
import SpotifyLoggedIn from './components/SpofityApiTest/SpotifyLoggedIn';



export default class App extends Component {

  componentDidMount() {
    const lastLogin = sessionStorage.getItem('time');
    const time = new Date();
    if (time.getTime() - lastLogin > 7200000 || !lastLogin) {
      sessionStorage.clear();
      sessionStorage.setItem('loggedIn', false);
    } else {
      console.log('still logged in');
    }
  }

  render() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    console.log('logged in =', loggedIn);
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>

          <Route exact path="/" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/user/:name" component={navProfile} />
          <Route exact path="/spotify-logged-in/:accessToken/:refreshToken" component={SpotifyLoggedIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editProfile" component={editProfile} />
        </div>
        <Footer></Footer>
      </Router>

    );
  };
}
