import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import './About.css';
import './Contact.css';
import { Animated } from "react-animated-css";

const About = () => (
  <div>

    <div class="landing">
      <div class="home-wrap">
        <div class="home-inner">

        </div>
      </div>
    </div>



    <div class="caption center-block text-center">
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay="600">
        <h3>We bridge the gap between</h3>
      </Animated>
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay="1500">
        <h3>The Artist and the Listener.</h3>
      </Animated>
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay="2000">
        <a class="btn btn-outline-light btn-lg" href="#about">Learn More</a>
      </Animated>
    </div>

    <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay="2000">
      <div class="narrow text-center">
        <div class="col-12">
          <h1>Who We Are</h1>
          <p class="lead">SoundBridge is a social music platform founded by four passionate software developers in California.
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

    <div id="contact" class="offset">

      <footer>
        <div class="row">

          <div class="col-md-5 contact-info">
            <h1>Sound Bridge</h1>
            <p>We are the bridge between Artists and their listeners.
            </p>
            <strong>Our Location</strong>
            <p>our Location<br></br>Our City, AA 222</p>
            <strong>Contact Info</strong>
            <p>(222) 222-2222<br></br>email@soundbridge.com</p>
            <a href="/#">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-reddit-square"></i>
              <i class="fab fa-linkedin"></i>
            </a>

          </div>

          <div class="col-md-7">
            <h3>Have a Question?</h3>

            <form id="contact-form" method="post" action="contact.php">

              <div class="messages"></div>
              <div class="controls">

                <div class="form-group">
                  <input id="form_name" type="text" name="name" class="form-control"
                    placeholder="Enter your name." required="required"></input>
                </div>

                <div class="form-group">
                  <input id="form_email" type="email" name="email" class="form-control"
                    placeholder="Enter your email." required="required"></input>
                </div>

                <div class="form-group">
                  <textarea id="form_message" name="message" class="form-control"
                    placeholder="Add your message." rows="4" required="required"></textarea>
                </div>

                <input type="submit" class="btn btn-outline-light btn-sm" value="Send message"></input>

              </div>

            </form>

          </div>

          <hr class="socket"></hr>


        </div> {/*} <!-- End Row --> */}
      </footer> {/*} <!-- End Footer --> */}



      {/* End Contact Section */}
    </div>

  </div>
);

export default About;