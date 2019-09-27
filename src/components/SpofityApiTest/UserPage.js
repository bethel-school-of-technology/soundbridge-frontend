import React, { Component } from 'react';
// import axios from 'axios';
import Playlists from './Playlists';

export default class UserPage extends Component {

    state = {
        accessToken: '',
        playlists: {},
        playlistsDisplay: { 'display': 'none' },
    }

    componentDidMount() {
        this.setState({
            accessToken: this.props.accessToken
        });
    }

    getPlaylist = async () => {
        try {
            const res = await fetch("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    'Authorization': 'Bearer ' + this.state.accessToken,
                }
            });
            const playlists = await res.json();
            this.setState({
                playlists,
                playlistsDisplay: { 'display': 'inherit' }
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const params = this.props.params;
        const spotifyInfo = this.props.spotifyInfo;
        console.log('userInfo: ', params);
        console.log('spotifyInfo: ', spotifyInfo);
        return (
            <div>
                <h1>Hey, {params.name}</h1>
                <h1>You are logged in!</h1>
                <div>
                    <h2>Spotify Info:</h2>
                    <p>Email: {spotifyInfo.email}</p>
                    <p>User Id: {spotifyInfo.id}</p>
                    {spotifyInfo.followers ? (
                        <p>You don't have any followers :(</p>
                    ) : (
                            <p>Followers: {spotifyInfo.followers}</p>
                        )
                    }
                    <button onClick={this.getPlaylist}>get playlists</button>
                </div>
                <div style={this.state.playlistsDisplay}>
                    <Playlists playlists={this.state.playlists} />
                </div>
            </div>
        )
    }
}

