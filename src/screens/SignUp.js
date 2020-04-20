import React from 'react';
import axios from 'axios';
import backendUrl from '../services/backendUrl'
import frontendUrl from '../services/frontendUrl'
import './SignUp.css';
import { Button, Card, CardBody, Container } from 'reactstrap';
// import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {

  state = {
    firstName: '',
    /* lastName: '', */
    email: '',
    password: '',
    signedUp: false,
    user: {},
  }

  submitSignup = e => {
    e.preventDefault();

    const signupInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios.post(backendUrl + 'api/user/register', signupInfo)
      .then(res => {
        const user = res.data;
        if (!user) {
          console.log('Result: ', res.data, 'no user found')
        } else {
          sessionStorage.setItem('userId', user._id);
          sessionStorage.setItem('name', user.name);
          sessionStorage.setItem('email', user.email);
          sessionStorage.setItem('spotify', user.spotify);
          sessionStorage.setItem('spotifyId', user.spotifyId);
          sessionStorage.setItem('spotifyRefreshToken', user.spotifyRefreshToken);
          sessionStorage.setItem('loggedIn', true);
          this.setState({
            user: res.data,
            signedUp: !this.state.signedUp
          })
        }
      });
  }

  render() {
    if (this.state.signedUp) {
      window.location.href = frontendUrl + `user/${this.state.user.name}`;
      // return <Redirect
      //   to={{
      //     pathname: `/user/${this.state.user.name}`,
      //     state: { info: this.state.user }
      //   }}
      // />
    }
    return (
      <Container className="justify-content-center">
        <Card className="mx-auto" id="signUpBody">
          <CardBody>
            <div className="text-center sign-up-card-title">
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