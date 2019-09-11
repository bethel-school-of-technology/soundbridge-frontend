import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoggedIn from './SpofityApiTest/LoggedIn';
import SpotifyApiTest from './SpofityApiTest/SpotifyApiTest';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SpotifyApiTest uri="http://localhost:3001/login/" />
          <Route exact path="/logged-in" component={LoggedIn}></Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
