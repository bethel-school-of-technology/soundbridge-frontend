import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import Comment from './Comment';

export default class Comments extends Component {

    state = {
        loading: true,
        showCommentForm: false,
        commentBtnText: 'Comment',
        comments: [],
    }

    async componentDidMount() {
        const res = await fetch(`https://soundbridge.herokuapp.com/api/posts/get-comments/${this.props.postId}`);
        // const res = await fetch(`http://localhost:4000/api/posts/get-comments/${this.props.postId}`);
        const comments = await res.json();
        this.setState({
            comments,
            loading: !this.state.loading
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

    getNewComment = commentInfo => {
        this.setState({
            commentBtnText: 'Comment',
            showCommentForm: !this.state.showCommentForm,
            comments: [...this.state.comments.reverse(), commentInfo],
        });
    }

    commentDeleted = commentId => {
        axios.delete('https://soundbridge.herokuapp.com/api/posts/delete-comment', { params: { commentId } })
        // axios.delete('http://localhost:4000/api/posts/delete-comment', { params: { commentId } })
            .then(async () => {
                const newRes = await fetch(`https://soundbridge.herokuapp.com/api/posts/get-comments/${this.props.postId}`);
                // const newRes = await fetch(`http://localhost:4000/api/posts/get-comments/${this.props.postId}`);
                const comments = await newRes.json();
                this.setState({ comments });
            })
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.loading) {
            return (
                <div></div>
            )
        }
        return (
            <div>
                {
                    this.state.comments.length > 0 ?
                        this.state.comments.map((comment, i) => {
                            return (
                                <Comment
                                    key={i}
                                    comment={comment}
                                    commentIndex={i}
                                    userInfo={this.props.userInfo}
                                    posterId={this.props.posterId}
                                    commentDeleted={this.commentDeleted}
                                />
                            )
                        }) :
                        <h4>No comments yet</h4>
                }
                {
                    this.props.userInfo.loggedIn === 'true' ?
                        <div>
                            <button className="commentbtn-post" onClick={this.commentBtnClicked}>
                                {this.state.commentBtnText}
                            </button>
                            <div>
                                {
                                    this.state.showCommentForm ?
                                        <CommentForm
                                            postId={this.props.postId}
                                            userInfo={this.props.userInfo}
                                            getNewComment={this.getNewComment}
                                        /> : null
                                }
                            </div>
                        </div>
                        :
                        <Link to="/login"><button className="commentbtn-post">Log in to comment</button></Link>
                }
            </div>
        )
    }
}
