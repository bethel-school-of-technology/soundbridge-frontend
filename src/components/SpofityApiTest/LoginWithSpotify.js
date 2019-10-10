import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Container, Form } from 'reactstrap';
import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import '../../screens/Login.css';


export default class LoginWithSpotify extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false,
        user: {},
    }

    onSubmit = e => {
        e.preventDefault();

        let loginInfo = {
            email: this.state.email,
            password: this.state.password
        };

        let spotifyInfo = {
            email: this.state.email,
            spotify: this.props.spotifyInfo.spotify,
            spotifyId: this.props.spotifyInfo.spotifyId,
            spotifyRefreshToken: this.props.spotifyInfo.spotifyRefreshToken
        }

        axios.post('http://localhost:4000/add-spotify', spotifyInfo)
        // axios.post('https://soundbridge.herokuapp.com/add-spotify', spotifyInfo)
            .then(res => {
                axios.post('http://localhost:4000/api/user/login', loginInfo)
                // axios.post('https://soundbridge.herokuapp.com/api/user/login', loginInfo)
                    .then(res => {
                        const user = res.data;
                        if (!user) {
                            console.log('Result: ', res.data, 'no user found')
                        } else {
                            const time = new Date();
                            sessionStorage.setItem('userId', user._id);
                            sessionStorage.setItem('name', user.name);
                            sessionStorage.setItem('email', user.email);
                            sessionStorage.setItem('spotify', user.spotify);
                            sessionStorage.setItem('spotifyId', user.spotifyId);
                            sessionStorage.setItem('spotifyRefreshToken', user.spotifyRefreshToken);
                            sessionStorage.setItem('loggedIn', true);
                            sessionStorage.setItem('time', time.getTime());
                            this.setState({
                                loggedIn: !this.state.loggedIn,
                                user,
                            });
                        }
                    })
                    .catch(e => console.log(e));
            });
    }

    render() {
        if (this.state.loggedIn) {
            window.location.href = `http://localhost:3000/user/${this.state.user.name}`;
            // window.location.href = `https://soundbridge.netlify.com/user/${this.state.user.name}`;
        }
        return (
            <Container className="justify-content-center">
                <Form className="mx-auto" onSubmit={this.onSubmit}>
                    <div className="cardbody">
                        <div className="text-center">
                            <h3>Login</h3>
                        </div>
                        <Input
                            type="email"
                            value={this.state.email}
                            onChange={e => {
                                this.setState({
                                    email: e.target.value
                                });
                            }}
                            name="email"
                            placeholder="Email"
                            id="exampleEmail" />
                        <Input
                            autoComplete="currentPassword"
                            type="password"
                            value={this.state.password}
                            onChange={e => {
                                this.setState({
                                    password: e.target.value
                                });
                            }}
                            name="password"
                            placeholder="Password"
                            id="examplePassword" />
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
    }
}
