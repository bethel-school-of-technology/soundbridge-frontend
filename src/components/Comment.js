import React, { Component } from 'react';
import CommentForm from './CommentForm';

export default class Comment extends Component {

    state = {
        showCommentForm: false,
        commentBtnText: 'Comment',
        comments: [],
    }

    async componentDidMount() {
        // const res = await fetch(`https://soundbridge.herokuapp.com/api/posts/get-comments/${this.props.postId}`);
        const res = await fetch(`http://localhost:4000/api/posts/get-comments/${this.props.postId}`);
        const comments = await res.json();
        this.setState({ comments });
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
        console.log('comments on this post: ', this.state.comments);
        return (
            <div>
                {
                    this.state.comments.map((comment, i) => {
                        return (
                            <div key={i} >
                                <h3>{comment.userName}</h3>
                                <br></br>
                                <p>{comment.body}</p>
                            </div>
                        )
                    })
                }
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
