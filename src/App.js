import React from 'react';
import background from './images/SoundBridge.jpg';
import logo from './OfficialsbLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="bg" src={background} alt="bg" ></img>
      <div>
        <img className="logo" src={logo} alt="logo"></img>
      </div>
    </div>
  );
};


export default App;
