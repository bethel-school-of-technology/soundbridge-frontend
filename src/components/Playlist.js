import React from 'react';
import { Col } from 'reactstrap';

const Playlist = (props) => {
    const playlistInfo = props.playlistInfo;
    return (
        <Col sm="6" md="4" lg="3" id="playlist-box-container">
            <div className="playlist-title">{playlistInfo.name}</div>
            <div
                className="playlist-img"
                style={{
                    'backgroundImage': `url(${playlistInfo.images[0].url})`,
                    "backgroundSize": 'cover'
                }}>
            </div>
            
        </Col>
    )
}

export default Playlist;