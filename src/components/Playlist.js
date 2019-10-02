import React from 'react';
import { Col } from 'reactstrap';

const Playlist = (props) => {
    const playlistInfo = props.playlistInfo;
    console.log(playlistInfo);
    return (
        <Col sm="3">
            <div
                className="playlist-img"
                style={{
                    'backgroundImage': `url(${playlistInfo.images[0].url})`
                }}>
                Playlist
            </div>
            <div className="playlist-title">{playlistInfo.name}</div>
        </Col>
    )
}

export default Playlist;