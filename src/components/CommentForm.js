import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';

class CommentForm extends Component {

    state = {
        body: '',
    }

    bodyChange = e => {
        this.setState({
            body: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const commentInfo = {
            userId: this.props.userInfo.userId,
            userName: this.props.userInfo.name,
            postId: this.props.postId,
            body: this.state.body,
        }

        // axios.post('https://soundbridge.herokuapp.com/api/posts/comment', commentInfo);
        axios.post('http://localhost:4000/api/posts/comment', commentInfo);

        this.props.getNewComment(commentInfo);

        this.setState({
            body: '',
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        name="body"
                        id="commentbody"
                        placeholder="Write your comment here..."
                        value={this.state.body}
                        onChange={this.bodyChange}
                    />
                    <Button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Comment</Button>
                </form>
            </div>
        )
    }
}

export default CommentForm;
