import React from 'react';
import logo from '../../finalLogo2.svg';
import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Button, Input, Card, CardBody, Container } from 'reactstrap';

class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <Container className="justify-content-center">
                    <Card className="mx-auto">
                        <CardBody>
                            <div className="text-center">
                                <h3>SignUp</h3>
                            </div>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name"></Input>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name"></Input>
                            <Input type="email" name="email" id="email" placeholder="Email"></Input>
                            <Input type="password" name="password" id="password" placeholder="Password"></Input>
                            <div className="text-center">
                                <Button id="formbtn" className="btn btn-md">Submit</Button>
                            </div>
                            <hr></hr>
                            <p id="option" className="d-flex justify-content-center mb-3 pt-2">Or Sign in with:</p>
                            <div className="row my-3 d-flex justify-content-around">
                                <Button className="rounded-pill">
                                    <FaFacebookF />
                                </Button>
                                <Button className="rounded-pill">
                                    <FaTwitter />
                                </Button>
                                <Button className="rounded-pill">
                                    <FaGooglePlusG />
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
                <div className="page-header section-dark" style={{ backgroundImage: "url(" + require("../../assets/images/SoundBridge.jpg") + ")" }}>
                    <div className="filter" />
                    <div className="content-center">
                    </div>
                </div>
                <div>
                    {<img className="logo" src={logo} alt="logo"></img>}
                </div>
            </div>
        );
    };
};

export default Register;