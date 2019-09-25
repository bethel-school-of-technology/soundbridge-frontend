import React, { Component } from 'react';

import LoginWithSpotify from './LoginWithSpotify';

export default class SpotifyLoggedIn extends Component {

    state = {
        spotifyInfo: {}
    }

    componentDidMount() {
        console.log(this.props.match.params);
        const { accessToken, refreshToken } = this.props.match.params;
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)

                this.setState({
                    spotifyInfo: {
                        spotify: true,
                        spotifyId: data.id,
                        spotifyRefreshToken: refreshToken
                    }
                });
            });
    };

    render() {
        return (
            <div>
                <h1>Log back in to add spotify!</h1>
                <LoginWithSpotify spotifyInfo={this.state.spotifyInfo} />
            </div>
        )
    }
}
