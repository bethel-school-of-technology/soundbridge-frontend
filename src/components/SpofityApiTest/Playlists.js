import React, { Component } from 'react';
import { getPlaylistTracks } from '../../services/spotifyApiMethods';

const listStyle = {
    'marginTop': '1em',
    // 'background': `url(${playlist.images[0].url})`,
    'backgroundRepeat': 'no-repeat',
    'height': '250px',
    'width': '250px',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'color': '#fff'
}

class Playlists extends Component {

    state = {
        tracks: {}
    }

    async componentDidMount() {
        const tracks = await getPlaylistTracks(this.props.playlists.tracks.href, this.props.accessToken);
        this.setState({ tracks })
    }

    render() {
        console.log(this.props.playlists);
        const tracks = this.state.tracks.items;
        if (tracks === undefined) {
            return <h1>loading</h1>
        }
        console.log('tracks: ', tracks);
        return (
            <div style={listStyle}>
                <h4>Title: {this.props.playlists.name}</h4>
                <p>Tracks: </p>
                {
                    tracks.map((tracks, i) => {
                        return <p key={i} >{tracks.track.name} <em>by</em> {tracks.track.artists[0].name}</p>
                    })
                }
            </div>
        )
    }
}

export default Playlists;
