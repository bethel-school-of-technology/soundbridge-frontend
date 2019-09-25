import React from 'react';
import axios from 'axios';
import './Login.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Button, Input, Container, Form } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
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

    axios.post('http://localhost:4000/api/user/login', user)
      .then(res => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios.post('http://localhost:4000/api/user/login', user)
    //   .then(res => {
    //     const user = res.data;
    //     if (!user) {
    //       console.log('Result: ', res.data, 'no user found')
    //     }
    //     if (user.spotify) {
    //       window.location.href =
    //         `/user/${user.name}/${user.spotify}/${user.spotifyId}/${user.spotifyRefreshToken}`;
    //     } else {
    //       window.location.href =
    //         `/user/${user.name}`;
    //     }
    //   })
    //   .catch(e => console.log(e));
    // console.log(user);

    this.setState({
      email: '',
      password: ''
    })
  }



  render() {
    return (
      <Container className="justify-content-center">
        <Form className="mx-auto" onSubmit={this.onSubmit}>
          <div className="cardbody">
            <div className="text-center">
              <h3>SignUp</h3>
            </div>
            <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
            <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
            <div className="text-center">
              <Button id="formbtn" type="submit" className="btn btn-md">Submit</Button>
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
          </div>
        </Form>
      </Container>
    );
  };
};
export default Login;