import React from 'react';
import axios from 'axios';
import './SignUp.css';
import { Button, Card, CardBody, Container } from 'reactstrap';

class SignUp extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  submitSignup = e => {
    e.preventDefault();

    const signupInfo = {
      name: this.state.firstName,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('https://soundbridge.herokuapp.com/api/user/register', signupInfo)
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <Container className="justify-content-center">
        <Card className="mx-auto">
          <CardBody>
            <div className="text-center">
              <h3 id="signUpHeader">SignUp</h3>
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
          </CardBody>
        </Card>
      </Container>
    );
  };
};
export default SignUp;