import React from 'react';
import { Col, Input, FormGroup, Label } from 'reactstrap';
import './Home.css';

const Home = () => (
  <div>

    <div className="home-page-content page-header section-dark" style={{
      backgroundImage:
        "url(" + require("../assets/images/SoundBridge.jpg") + ")"
    }} >
      <div className="filter">
        <div className="content-center"></div>
      </div>

    </div>

  </div>

);

export default Home;