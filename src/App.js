import React from 'react';
import logo from './finalLogo2.svg';
import './App.css';
import Login from './components/Navbars/login';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./assets/images/SoundBridge.jpg") + ")"
        }} >
        <div className="filter" />
        <div className="content-center">
        </div>
        <div />
      </div>
      <div>
        {<img className="logo" src={logo} alt="logo"></img>}
      </div>
    </div>
  );
};


export default App;
