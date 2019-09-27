import React from 'react';
import {Button} from 'reactstrap';
import './About.css';
import './Contact.css';
import { Animated } from "react-animated-css";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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
        <a className="btn btn-outline-light btn-lg" href="#about">Learn More</a>
      </Animated>
    </div>

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

    {/* Start Contact Section */}

    <div id="contact" className="offset">

      <footer>
        <div className="row">

          <div className="col-md-5 contact-info">
            <h1>Sound Bridge</h1>
            <p>We are the bridge between Artists and their listeners.
            </p>
            <strong>Our Location</strong>
            <p>our Location<br></br>Our City, AA 222</p>
            <strong>Contact Info</strong>
            <p>(222) 222-2222<br></br>email@soundbridge.com</p>
            <div id="icons" className="row">
              <Button className=" fa rounded-pill">
                <FaFacebookF />
              </Button>
              <Button className=" fa rounded-pill" >
                <FaTwitter />
              </Button>
              <Button className=" fa rounded-pill">
                <FaInstagram />
              </Button>
              <Button className=" fa rounded-pill">
                <FaLinkedin />
              </Button>
              </div>

          </div>

          <div className="col-md-7">
            <h3>Have a Question?</h3>

            <form id="contact-form" method="post" action="contact.php">

              <div className="messages"></div>
              <div className="controls">

                <div className="form-group">
                  <input id="form_name" type="text" name="name" className="form-control"
                    placeholder="Enter your name." required="required"></input>
                </div>

                <div className="form-group">
                  <input id="form_email" type="email" name="email" className="form-control"
                    placeholder="Enter your email." required="required"></input>
                </div>

                <div className="form-group">
                  <textarea id="form_message" name="message" className="form-control"
                    placeholder="Add your message." rows="4" required="required"></textarea>
                </div>

                <input type="submit" className="btn btn-outline-light btn-sm" value="Send message"></input>

              </div>

            </form>

          </div>

          <hr className="socket"></hr>


        </div> {/*} <!-- End Row --> */}
      </footer> {/*} <!-- End Footer --> */}



      {/* End Contact Section */}
    </div>

  </div>
);

export default About;