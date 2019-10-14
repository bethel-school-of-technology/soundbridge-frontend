import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { SpotifyApiMethods } from '../services/spotifyApiMethods';
import Playlist from './Playlist';

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
    if (this.state.playlists.items.length < 1) {
      return <h1>loading playlists...</h1>
    }
    else if (this.state.playlists.total === 0) {
      return <h1>You don't have any Spotify playlists</h1>
    }
    else {
      const playlists = this.state.playlists;
      return (
        <Row>
          {
            playlists.items.map((playlist, i) => {
              return <Playlist key={i} playlistInfo={playlist} />
            })
          }
          {/* <Col sm="3">
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
          </Col> */}
        </Row>
      )
    }
  }
}

export default Playlists;
