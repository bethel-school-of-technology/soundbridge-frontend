import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Container, Form } from 'reactstrap';
import backendUrl from '../../services/backendUrl'
import frontendUrl from '../../services/frontendUrl'

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

        axios.post(backendUrl + 'add-spotify', spotifyInfo)
            .then(res => {
                axios.post(backendUrl + 'api/user/login', loginInfo)
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
            window.location.href = frontendUrl + `user/${this.state.user.name}`;
        }
        return (
            <Container className="justify-content-center">
                <Form className="login-form mx-auto" id="cardBody" onSubmit={this.onSubmit}>
                    <div className="cardbody">
                        <div className="text-center">
                            <h3 id="headerTitle">Login</h3>
                        </div>
                        <Input type="email"
                            value={this.state.email}
                            onChange={e => {
                                this.setState({
                                    email: e.target.value
                                });
                            }}
                            name="email"
                            id="emailtxt" 
                            placeholder="Email"/>
                        <Input autoComplete="currentPassword"
                            type="password"
                            value={this.state.password}
                            onChange={e => {
                                this.setState({
                                    password: e.target.value
                                });
                            }}
                            name="password"
                            id="passwordtxt" 
                            placeholder="Password"/>
                        <div className="text-center">
                            <Button id="formbtn" type="submit" className="btn btn-md">Submit</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        );
    }
}
