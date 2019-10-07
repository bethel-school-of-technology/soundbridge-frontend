import React, { Component } from 'react';
import { Button, Input, Container } from 'reactstrap';
import axios from 'axios';

class PostForm extends Component {

    state = {
        title: '',
        body: '',
    }

    titleChange = e => {
        this.setState({
            title: e.target.value
        });
    }

    bodyChange = e => {
        this.setState({
            body: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const postInfo = {
            userId: this.props.userInfo._id,
            userName: this.props.userInfo.name,
            title: this.state.title,
            body: this.state.body,
        }

        axios.post('http://localhost:4000/api/posts', postInfo);

        this.props.getNewPost(postInfo);

        this.setState({
            title: '',
            body: '',
        });

    }

    render() {
        return (
            <Container>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.titleChange}
                    />
                    <Input
                        type="text"
                        name="body"
                        id="body"
                        placeholder="Write your post here..."
                        value={this.state.body}
                        onChange={this.bodyChange}
                    />
                    <Button id="formbtn" type="submit" className="btn btn-md">Submit</Button>
                </form>
            </Container>
        )
    }
}

export default PostForm;
