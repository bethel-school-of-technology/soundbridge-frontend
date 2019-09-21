import React, { Component } from 'react';
import queryString from 'query-string';
import Playlists from './Playlists';
import UserInfo from './UserInfo';

export default class SpotifyLoggedIn extends Component {

    state = {
        accessToken: '',
        refreshToken: '',
        user: {},
        playlists: {},
        playlistsDisplay: { 'display': 'none' },
    }

    componentDidMount() {
        if (this.state.accessToken === '') {
            const parsed = queryString.parse(window.location.search);
            this.setState({ 
                accessToken: parsed.access_token,
                refreshToken: parsed.refresh_token
            }, () => {
                fetch('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': 'Bearer ' + this.state.accessToken,
                    }
                }).then(res => res.json())
                    .then(data => this.setState({ user: data }));
            });
        }
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
                playlistsDisplay: {'display': 'inherit'}
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                <UserInfo />
                <h2>Hello {user.display_name}</h2>
                <p>Email: {user.email}</p>
                <p>User Id: {user.id}</p>
                {user.followers ? (
                    <p>You don't have any followers :(</p>
                ) : (
                        <p>Followers: {user.followers}</p>
                    )
                }
                <button onClick={this.getPlaylist}>get playlists</button>
                <div style={this.state.playlistsDisplay}>
                    <Playlists playlists={this.state.playlists} />
                </div>
            </div>
        )
    }
}
