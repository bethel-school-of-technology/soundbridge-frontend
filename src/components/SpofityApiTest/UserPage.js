import React, { Component } from 'react';
import axios from 'axios';
import Playlists from './Playlists';

export default class UserPage extends Component {

    state = {
        accessToken: '',
        spotifyInfo: {},
        playlists: {},
        playlistsDisplay: { 'display': 'none' },
    }

    componentDidMount() {
        const params = this.props.match.params;
        axios.post('http://localhost:4000/has-spotify/' + params.spotifyRefreshToken)
            .then(res => {
                this.setState({
                    accessToken: res.data,
                }, () => {
                    fetch('https://api.spotify.com/v1/me', {
                        headers: {
                            'Authorization': 'Bearer ' + this.state.accessToken,
                        }
                    }).then(res => res.json())
                        .then(data => this.setState({ spotifyInfo: data }));
                });
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
        const params = this.props.match.params;
        const user = this.state.spotifyInfo;
        console.log(user);
        return (
            <div>
                <h1>Hey, {params.name}</h1>
                <h1>You are logged in!</h1>
                <div>
                    <h2>Spotify Info:</h2>
                    <p>Email: {user.email}</p>
                    <p>User Id: {user.id}</p>
                    {user.followers ? (
                        <p>You don't have any followers :(</p>
                    ) : (
                            <p>Followers: {user.followers}</p>
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

