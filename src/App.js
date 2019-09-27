import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Navbars/Footer';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Profile from './screens/profile';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import editProfile from './screens/editProfile';
import Overview from './screens/Overview';



export default class App extends Component {

  render() {
    return (

      <Router>
        <div className="App">
          <Navbar></Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/editProfile" component={editProfile} />
        </div>
    <Footer></Footer>
      </Router>

    );
  };
}
