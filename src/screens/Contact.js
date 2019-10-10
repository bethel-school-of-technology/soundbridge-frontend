import React from 'react';
import './Contact.css';
import { Form, Button } from 'reactstrap'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Animated } from "react-animated-css";

const Contact = () => (

    <div id="contact" className="offset">

        <footer>
            <div className="row" id="rowbg">

                <div className="col-md-5 contact-info">
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={100}>
                        <h1>Sound Bridge</h1>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                        <p>We are the bridge between Artists and their listeners.</p>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={300}>
                        <strong>Our Location</strong>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={400}>
                        <p>our Location<br></br>Our City, AA 222</p>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={500}>
                        <strong>Contact Info</strong>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={600}>
                        <p>(222) 222-2222<br></br>email@soundbridge.com</p>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={600}>
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
                    </Animated>

                </div>

                <div className="col-md-7">
                <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={100}>
                    <h3>Have a Question?</h3>
                    </Animated>

                    <Form id="contact-form" method="post" action="contact.php">

                        <div className="messages"></div>
                        <div className="controls">
                            <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                                <div className="form-group">
                                    <input id="form_name" type="text" name="name" className="form-control"
                                        placeholder="Enter your name." required="required"></input>
                                </div>
                            </Animated>
                            <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={300}>
                                <div className="form-group">
                                    <input id="form_email" type="email" name="email" className="form-control"
                                        placeholder="Enter your email." required="required"></input>
                                </div>
                            </Animated>
                            <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={400}>
                                <div className="form-group">
                                    <textarea id="form_message" name="message" className="form-control"
                                        placeholder="Add your message." rows="4" required="required"></textarea>
                                </div>
                            </Animated>
                            <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={500}>
                                <input type="submit" className="btn btn-outline-light btn-sm" value="Send message"></input>
                            </Animated>

                        </div>

                    </Form>

                </div>

                <hr className="socket"></hr>


            </div> {/*} <!-- End Row --> */}
        </footer> {/*} <!-- End Footer --> */}



        {/* End Contact Section */}
    </div>
);



export default Contact;