import React, { Component } from 'react';
import { Button, Input, Container } from 'reactstrap';
import axios from 'axios';
import './SpofityApiTest/PostForm.css';

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
            userId: this.props.userInfo.userId,
            userName: this.props.userInfo.name,
            title: this.state.title,
            body: this.state.body,
        }

        // axios.post('https://soundbridge.herokuapp.com/api/posts', postInfo);
        axios.post('http://localhost:4000/api/posts', postInfo);

        this.props.getNewPost(postInfo);

        this.setState({
            title: '',
            body: '',
        });

    }

    render() {
        console.log('post form props: ', this.props)
        return (
            <Container className="postform-container">
                <form onSubmit={this.onSubmit}>
                    <Input
                    className="form-control"
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
                    <Button id="formbtn-post" type="submit" className="btn btn-outline-light btn-sm">Submit</Button>
                </form>
            </Container>
        )
    }
}

export default PostForm;
