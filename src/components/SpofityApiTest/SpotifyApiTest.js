import React, { Component } from 'react';
import backendUrl from '../../services/backendUrl'

export default class componentName extends Component {

    render() {
        return (
            <div>
                <button className="spotify-login-btn" onClick={() => {
                    window.location.href = backendUrl + "spotify-login";
                }}>LOGIN TO SPOTIFY</button>
            </div>
        )
    }
}

