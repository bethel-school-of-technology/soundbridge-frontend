import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';


export default class LoginWithSpotify extends Component {

    state = {
        email: '',
        password: '',
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

        axios.post('http://localhost:3001/add-spotify', spotifyInfo)
            .then(res => {
                console.log(res.data);
                axios.post('http://localhost:3001/auth/login', loginInfo)
                    .then(res => {
                        const user = res.data;
                        if (!user) {
                            console.log('Result: ', res.data, 'no user found')
                        }
                        if (user.spotify) {
                            window.location.href =
                                `/user/${user.name}/${user.spotify}/${user.spotifyId}/${user.spotifyRefreshToken}`;
                        } else {
                            window.location.href =
                                `/user/${user.name}`;
                        }
                    })
                    .catch(e => console.log(e));
            });
    }

    render() {
        console.log(this.props);
        return (
            <div className="absolute">
                <form onSubmit={this.onSubmit} className="login-form">
                    <label htmlFor="exampleEmail" >Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={e => {
                            this.setState({
                                email: e.target.value
                            });
                        }}
                        name="email"
                        id="exampleEmail" />
                    <label htmlFor="examplePassword" >Password</label>
                    <input
                        autoComplete="currentPassword"
                        type="password"
                        value={this.state.password}
                        onChange={e => {
                            this.setState({
                                password: e.target.value
                            });
                        }}
                        name="password"
                        id="examplePassword" />
                    <button type="submit" >Login</button>
                </form>
            </div>
        );
    }
}
