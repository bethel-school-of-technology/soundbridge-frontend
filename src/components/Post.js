import React, { Component } from 'react';
import CommentForm from './CommentForm';

export default class Post extends Component {

    state = {
        showCommentForm: false,
        commentBtnText: 'Comment',
    }

    getNewComment = commentInfo => {
        this.setState({
            commentBtnText: 'Comment',
            showCommentForm: !this.state.showCommentForm
        });
    }

    commentBtnClicked = () => {
        if (this.state.commentBtnText === 'Comment') {
            this.setState({
                commentBtnText: 'Close',
                showCommentForm: !this.state.showCommentForm
            });
        } else {
            this.setState({
                commentBtnText: 'Comment',
                showCommentForm: !this.state.showCommentForm
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <button onClick={this.commentBtnClicked}>
                    {this.state.commentBtnText}
                </button>
                <div >
                    {
                        this.state.showCommentForm ?
                            <CommentForm
                                postId={this.props.post._id}
                                userInfo={this.props.userInfo}
                                getNewComment={this.getNewComment}
                            /> : null
                    }
                </div>
            </div>
        )
    }
}
