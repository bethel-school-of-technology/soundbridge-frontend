import React, { Component } from 'react';
import SpotifyApiTest from './SpotifyApiTest';

export default class UserPageNoSpotify extends Component {

    state = {
        accessToken: '',
        spotifyInfo: {},
        playlists: {},
        playlistsDisplay: { 'display': 'none' },
    }

    render() {
        const params = this.props.match.params;

        return (
            <div>
                <h1>Hey, {params.name}</h1>
                <h1>You are logged in!</h1>
                <SpotifyApiTest />
            </div>
        )
    }
}

