import React, { Component } from 'react';
// import axios from 'axios';
import Playlists from './Playlists';
import SpotifyMethods from '../../services/spotifyApiMethods';

export default class UserPage extends Component {

    state = {
        playlists: {
            items: []
        },
    }

    async componentDidMount() {
        const playlists = await SpotifyMethods.getPlaylist(this.props.accessToken);
        this.setState({
            playlists
        });
    }

    render() {
        const user = this.props.params;
        const spotifyInfo = this.props.spotifyInfo;
        console.log('spotifyInfo: ', spotifyInfo);
        console.log('playlists: ', this.state.playlists)
        if (this.state.playlists.items.length < 1) {
            return <h1>Loading</h1>
        } else {
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
                        {/* <button onClick={this.playlist}>get playlists</button> */}
                    </div>
                    <div style={this.state.playlistsDisplay}>
                        {this.state.playlists.items.map((playlist, i) => {
                            return <Playlists
                                key={i}
                                playlists={playlist}
                                accessToken={this.props.accessToken} />
                        })
                        }
                    </div>
                </div>
            )
        }
    }
}

