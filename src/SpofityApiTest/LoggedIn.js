import React, { Component } from 'react';
import queryString from 'query-string';

export default class LoggedIn extends Component {

    state = {
        accessToken: '',
        user: {},
    }

    componentDidMount() {
        if (this.state.accessToken === '') {
            const parsed = queryString.parse(window.location.search);
            this.setState({ accessToken: parsed.access_token }, () => {
                fetch('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': 'Bearer ' + this.state.accessToken,
                    }
                }).then(res => res.json())
                    .then(data => this.setState({ user: data }));
            });
        }
    }

    render() {
        const user = this.state.user;
        console.log(user);
        return (
            <div>
                <h1>Your Spotify Info:</h1>
                <h2>Display Name: {user.display_name}</h2>
                <p>Email: {user.email}</p>
                <p>User Id: {user.id}</p>
                {user.followers ?
                    <p>You don't have any followers :(</p>
                    :
                    <p>Follows: {user.followers}</p>
                }
            </div>
        )
    }
}
