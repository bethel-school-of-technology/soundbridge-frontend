import React from 'react';
import axios from 'axios';
import './SignUp.css';
import { Button, Card, CardBody, Container } from 'reactstrap';

class SignUp extends React.Component {

  state = {
    firstName: '',
    /* lastName: '', */
    email: '',
    password: '',
  }

  submitSignup = e => {
    e.preventDefault();

    const signupInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('https://soundbridge.herokuapp.com/api/user/register', signupInfo)
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <Container className="justify-content-center">
        <Card className="mx-auto" id="signUpBody">
          <CardBody>
            <div className="text-center">
              <h3 id="signUpHeader">SignUp</h3>
            </div>
            <form onSubmit={this.submitSignup} >
              <input
                type="text"
                name="name"
                value={this.state.name}
                id="firstNametxt"
                placeholder="Name"
                onChange={e => {
                  this.setState({
                    name: e.target.value
                  });
                }} />
              {/* <input
                type="text"
                name="lastNametxt"
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
                id="emailtxt"
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
                id="passwordtxt"
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