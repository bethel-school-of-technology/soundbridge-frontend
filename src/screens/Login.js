import React from 'react';
import axios from 'axios';
import backendUrl from '../services/backendUrl'
import frontendUrl from '../services/frontendUrl'
import './Login.css';
import { Button, Input, Container, Form } from 'reactstrap';
// import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      user: {},
    }
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  }

  onSubmit = async event => {
    event.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(backendUrl + 'api/user/login', user)
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
            loggedIn: !this.state.loggedIn,
            user,
          });
        }
      })
      .catch(e => console.log(e));
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    if (this.state.loggedIn) {
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
        <Form className="mx-auto" id="cardBody" onSubmit={this.onSubmit}>
          <div className="cardbody">
            <div className="text-center">
              <h3 id="headerTitle">Login</h3>
            </div>
            <Input type="email" name="email" id="emailtxt" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
            <Input type="password" name="password" id="passwordtxt" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
            <div className="text-center">
              <Button id="formbtn" type="submit" className="btn btn-md">Submit</Button>
            </div>
          </div>
        </Form>
      </Container>
    );
  };
};
export default Login;