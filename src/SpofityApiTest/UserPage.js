import React, { Component } from 'react';

export default class UserPage extends Component {

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        const params = this.props.match.params;
        return (
            <div>
                <h1>Hey, {params.name}</h1>
                <h1>You are logged in!</h1>
            </div>
        )
    }
}

