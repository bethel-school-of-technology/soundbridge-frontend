import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { SpotifyApiMethods } from '../services/spotifyApiMethods';

export default class Songs extends Component {

    state = {
        songs: {
            items: []
        },
    }

    async componentDidMount() {
        const songs = await SpotifyApiMethods.getSavedTracks(this.props.accessToken);
        this.setState({ songs });
    }

    render() {
        return (
            <div>
                {
                    this.state.songs.items.length < 1 ?
                        <h3>You haven't saved any songs on Spotify. Go like some music yo!</h3>
                        :
                        <div>
                            <Row className="user-songs">
                                <Col className="song-col" sm="4">
                                    <div className="songs" >Title</div>
                                </Col>
                                <Col className="song-col" sm="4">
                                    <div className="songs" >Artist</div>
                                </Col>
                            </Row>
                            {this.state.songs.items.map((song, i) => {
                                return (
                                    <Row key={i}>
                                        <Col className="song-col" sm="4">
                                            <p className="song">{song.track.name}</p>
                                        </Col>
                                        <Col className="song-col" sm="4">

                                            <p className="song">{song.track.artists[0].name}</p>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </div>
                }
            </div>
        )
    }
}
