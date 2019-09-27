import React, { Component } from 'react';
// import axios from 'axios';
import Playlists from './Playlists';
import { getPlaylist } from '../../services/spotifyApiMethods';

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

    playlist = async () => {
        const playlists = await getPlaylist(this.state.accessToken)
        this.setState({
            playlists,
            playlistsDisplay: { 'display': 'inherit' }
        });
    }

    render() {
        const user = this.props.params;
        const spotifyInfo = this.props.spotifyInfo;
        console.log('spotifyInfo: ', spotifyInfo);
        return (
            <div>
                <h1>Hey, {user.name}</h1>
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
                    <button onClick={this.playlist}>get playlists</button>
                </div>
                <div style={this.state.playlistsDisplay}>
                    <Playlists playlists={this.state.playlists} />
                </div>
            </div>
        )
    }
}

