import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';
import './SpofityApiTest/PostForm.css';
import Profileimg from '../assets/images/profile-img.jpg';

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

        // axios.post('https://soundbridge.herokuapp.com/api/posts', postInfo)
        axios.post('http://localhost:4000/api/posts', postInfo)
            .then(res => {
                this.props.getNewPost(res.data);
            });

        this.setState({
            title: '',
            body: '',
        });

    }

    render() {
        return (
            <div className="White-box">
                <div className="postform">
                    <div className="title-and-img">
                        <div className="post-profile-img-container ">
                            <div className="post-profile-img">
                                <img id="profile-image" src={Profileimg} alt="Profile" />
                            </div>
                        </div>
                        <h4 className="formtitle">Create Post</h4>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <Input
                            className="form-control"
                            type="text"
                            name="title"
                            id="posttitle"
                            placeholder="Title..."
                            value={this.state.title}
                            onChange={this.titleChange}

                        />
                        <Input
                            type="textarea"
                            name="body"
                            id="postbody"
                            placeholder="Write your post here..."
                            value={this.state.body}
                            onChange={this.bodyChange}
                        />
                        <Button id="formbtn-post" type="submit"
                            className="btn btn-outline-light btn-sm">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;
