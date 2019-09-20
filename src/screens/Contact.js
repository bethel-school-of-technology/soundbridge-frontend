import React from 'react';
import './Contact.css';
import {Form} from 'reactstrap'

const Contact = () => (

<div id="contact" className="offset">

<footer>
    <div className="row" id="rowbg">

        <div className="col-md-5 contact-info">
            <h1>Sound Bridge</h1>
            <p>We are the bridge between Artists and their listeners.
            </p>
            <strong>Our Location</strong>
            <p>our Location<br></br>Our City, AA 222</p>
            <strong>Contact Info</strong>
            <p>(222) 222-2222<br></br>email@soundbridge.com</p>
            <a href="/">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-reddit-square"></i>
                <i className="fab fa-linkedin"></i>
            </a>

        </div>

        <div className="col-md-7">
            <h3>Have a Question?</h3>

            <Form id="contact-form" method="post" action="contact.php">

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

            </Form>

        </div>

        <hr className="socket"></hr>
        

    </div> {/*} <!-- End Row --> */}
</footer> {/*} <!-- End Footer --> */}



{/* End Contact Section */}
</div>
);



export default Contact;