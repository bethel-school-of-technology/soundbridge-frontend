import React, { Component } from 'react';
// import axios from 'axios';

export default class componentName extends Component {

    render() {
        return (
            <div>
                <button onClick={() => {
                    window.location.href = "http://localhost:3001/login";
                }}>Login</button>
            </div>
        )
    }
}

