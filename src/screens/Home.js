import React from 'react';
import './Home.css';
import { Animated } from "react-animated-css";

const Home = () => (
  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200}>

    <div className="home-page-content page-header section-dark" style={{
      backgroundImage:
        "url(" + require("../assets/images/SoundBridge.jpg") + ")"
    }} >
      <div className="filter">
        <div className="content-center"></div>
      </div>

    </div>

  </Animated>

);

export default Home;