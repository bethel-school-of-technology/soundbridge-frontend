import React, { Component } from 'react';
import CommentForm from './CommentForm';
import './Post.css';
import Profileimg from '../assets/images/profile-img.jpg';

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
            <div className="Post-White-box">
                <div className="postbox">
                <div className="title-and-img">
                        <div className="post-profile-img-container ">
                            <div className="post-profile-img">
                                <img id="profile-image" src={Profileimg} alt="Profile" />
                            </div>
                        </div>
                        <h4 className="posttitle">{this.props.post.title}</h4>
                    </div>
                    <p>{this.props.post.body}</p>
                    <button className="commentbtn-post" onClick={this.commentBtnClicked}>
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
            </div>
        )
    }
}
