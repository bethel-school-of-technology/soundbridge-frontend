import React from 'react';
import axios from 'axios';
import './SignUp.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Button, Card, CardBody, Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    signedUp: false,
    user: {},
  }

  submitSignup = e => {
    e.preventDefault();

    const signupInfo = {
      name: this.state.firstName,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('https://soundbridge.herokuapp.com/api/user/register', signupInfo)
    // axios.post('http://localhost:4000/api/user/register', signupInfo)
      .then(res => res.data ? this.setState({
        user: res.data,
        signedUp: !this.state.signedUp
      }) :
        console.log('User not registered')
      );
  }

  render() {
    if (this.state.signedUp) {
      return <Redirect
        to={{
          pathname: `/user/${this.state.user.name}`,
          state: { info: this.state.user }
        }}
      />
    }
    return (
      <Container className="justify-content-center">
        <Card className="mx-auto">
          <CardBody>
            <div className="text-center sign-up-card-title">
              <h3>SignUp</h3>
            </div>
            <form onSubmit={this.submitSignup} >
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                id="firstName"
                placeholder="First Name"
                onChange={e => {
                  this.setState({
                    firstName: e.target.value
                  });
                }} />
              {/* <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                id="lastName"
                placeholder="Last Name"
                onChange={e => {
                  this.setState({
                    lastName: e.target.value
                  });
                }} /> */}
              <input
                type="email"
                name="email"
                value={this.state.email}
                id="email"
                placeholder="Email"
                onChange={e => {
                  this.setState({
                    email: e.target.value
                  });
                }} />
              <input
                type="password"
                name="password"
                value={this.state.password}
                id="password"
                placeholder="Password"
                onChange={e => {
                  this.setState({
                    password: e.target.value
                  });
                }} />
              <div className="text-center">
                <Button id="formbtn" type="submit" className="btn btn-md">Submit</Button>
              </div>
            </form>
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
    );
  };
};
export default SignUp;