import React from 'react';
import { Col, Input, FormGroup, Label } from 'reactstrap';
import './Home.css';

const Home = () => (
  <div>

    <FormGroup row>
      <Col sm={10}>
        <Input type="textarea" name="text" id="What's on your mind?" />
      </Col>
    </FormGroup>

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