import React, { Component } from 'react';

export default class componentName extends Component {

    render() {
        return (
            <div>
                <button className="spotify-login-btn" onClick={() => {
                    window.location.href = "http://localhost:4000/spotify-login";
                }}>LOGIN TO SPOTIFY</button>
            </div>
        )
    }
}

