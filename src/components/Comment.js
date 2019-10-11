import React, { Component } from 'react';
import CommentForm from './CommentForm';

export default class Comment extends Component {

    state = {
        showCommentForm: false,
        commentBtnText: 'Comment',
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
                <h2>Here's a comment</h2>
                <button onClick={this.commentBtnClicked}>
                    {this.state.commentBtnText}
                </button>
                <div>
                    {
                        this.state.showCommentForm ?
                            <CommentForm
                                postId={this.props.postId}
                                userInfo={this.props.userInfo}
                                getNewComment={this.props.getNewComment}
                            /> : null
                    }
                </div>
            </div>
        )
    }
}
