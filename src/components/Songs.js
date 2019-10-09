import React, { Component } from 'react';
import { SpotifyApiMethods } from '../services/spotifyApiMethods';

export default class Songs extends Component {

    state = {
        songs: [],
    }

    async componentDidMount() {
        const tracks = await SpotifyApiMethods.getSavedTracks(this.props.accessToken);
        console.log('saved songs: ', tracks);
    }

    render() {
        
        return (
            <div>
                <h1>some songs</h1>
            </div>
        )
    }
}
