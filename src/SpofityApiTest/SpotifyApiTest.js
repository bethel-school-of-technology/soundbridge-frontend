import React, { Component } from 'react';
// import axios from 'axios';

export default class componentName extends Component {
    state = {
        track: {},
    }

    // async componentDidMount() {
    //     const encodedURI = window.encodeURI(this.props.uri);
    //     try {
    //         await axios.get(encodedURI).then(res => {
    //             console.log(res);
    //         })
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    login = () => {
        window.location.href = "http://localhost:3001/login";
    }

    render() {
        const { track } = this.state;
        console.log(track);

        return (
            <div>
                <h1>Hey</h1>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

