import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { SpotifyApiMethods } from '../services/spotifyApiMethods';

class Playlists extends Component {

  state = {
    playlists: {
      items: []
    },
  }

  async componentDidMount() {
    const playlists = await SpotifyApiMethods.getPlaylist(this.props.accessToken);
    this.setState({
      playlists
    });
  }

  render() {
    console.log('playlists: ', this.state.playlists)
    if (this.state.playlists.items.length < 1) {
      return <h1>loading playlists...</h1>
    }
    else if (this.state.playlists.total === 0) {
      return <h1>You don't have any Spotify playlists</h1>
    }
    else {
      return (
        <Row>
          <Col sm="3">
            <div className="playlist-img">Playlist</div>
            <div className="playlist-title">Title</div>
          </Col>
          <Col sm="3">
            <div className="playlist-img">Playlist</div>
            <div className="playlist-title">Title</div>
          </Col>
          <Col sm="3">
            <div className="playlist-img">Playlist</div>
            <div className="playlist-title">Title</div>
          </Col>
          <Col sm="3">
            <div className="playlist-img">Playlist</div>
            <div className="playlist-title">Title</div>
          </Col>
        </Row>
      )
    }
  }
}

export default Playlists;
