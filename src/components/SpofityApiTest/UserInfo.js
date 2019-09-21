import React, { Component } from 'react';
import axios from 'axios';

export default class UserInfo extends Component {

    state = {
        user: {},
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user-info")
            .then(userList => this.setState({
                user: userList.data[0]
            }, () => console.log(this.state.user))
            )
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                <h1>Hello, {user.name}</h1>
            </div>
        )
    }
}
