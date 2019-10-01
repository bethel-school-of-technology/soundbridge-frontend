import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';



class Playlists extends Component {

    

    render() {
        return(
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

export default Playlists;
