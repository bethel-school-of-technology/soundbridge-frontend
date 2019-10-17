import React, { Component } from 'react';
import './Post.css';
import Profileimg from '../assets/images/profile-img.jpg';
import Comments from './Comments';

export default class Post extends Component {

    state = {
        showComments: false,
        viewCommentsText: 'View Comments',
    }

    viewComments = () => {
        if (this.state.viewCommentsText === 'View Comments') {
            this.setState({
                viewCommentsText: 'Close',
                showComments: !this.state.showComments,
            });
        } else {
            this.setState({
                viewCommentsText: 'View Comments',
                showComments: !this.state.showComments,
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
                        <h5 className="postAuthor">{this.props.post.userName}</h5>
                        <br></br>
                    </div>
                    <div className="postBody">
                        <h4 className="posttitle">{this.props.post.title}</h4>
                        <p>{this.props.post.body}</p>
                    </div>
                    <button className="commentbtn-post" onClick={this.viewComments}>
                        {this.state.viewCommentsText}
                    </button>
                    {
                        this.props.post.userId === this.props.userInfo.userId ?
                            <button
                                className="commentbtn-post"
                                style={{ "marginLeft": "10px" }}
                                onClick={() => this.props.postDeleted(this.props.post._id, this.props.postIndex)}
                            >
                                Delete
                            </button>
                            : null
                    }
                    <div className="Comments">
                        {
                            this.state.showComments ?
                                <Comments
                                    comments={this.state.comments}
                                    commentDeleted={this.commentDeleted}
                                    postId={this.props.post._id}
                                    posterId={this.props.post.userId}
                                    userInfo={this.props.userInfo}
                                /> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
