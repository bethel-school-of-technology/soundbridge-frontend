import React from 'react';
import {Button} from 'reactstrap';
import './About.css';
import './Contact.css';
import { Animated } from "react-animated-css";

const About = () => (
  <div>

    <div className="landing">
      <div className="home-wrap">
        <div className="home-inner">

        </div>
      </div>
    </div>



    <div className="caption center-block text-center">
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={600}>
        <h3>We bridge the gap between</h3>
      </Animated>
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={1500}>
        <h3>The Artist and the Listener.</h3>
      </Animated>
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={2000}>
        <a className="btn btn-outline-light btn-lg" href="#">Learn More</a>
      </Animated>
    </div>

<div className="page-bg">
    <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={2000}>
      <div className="narrow text-center">
        <div className="col-12">
          <h1>Who We Are</h1>
          <p className="lead">SoundBridge is a social music platform founded by four passionate software developers in California.
           </p>
        </div>
      </div>
    </Animated>

    <div className="portrait-section">
      <Animated>
        <div className="about-img">

        </div>
      </Animated>
      <Animated>
        <div className="about-text-container">
          <div className="about-text-title">
            <h3>What We Do</h3>
            <hr></hr>
          </div>
          <div className="about-text-content">
            <p>Together, we aim to connect Listeners and Musicians in a tight-nit, online community.</p> 
            <p>As musicians ourselves, we want to make it easy to colaberate with other artists, find new listeners and even discover new venues and events!</p>
          </div>

        </div>
      </Animated>

    </div>
    </div>

   
    </div>

  
);

export default About;