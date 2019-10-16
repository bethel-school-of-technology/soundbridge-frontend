import React, { Component } from 'react';
import './Post.css';
import Profileimg from '../assets/images/profile-img.jpg';
import Comment from './Comment';

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
                        <h4 className="posttitle">{this.props.post.userName}: {this.props.post.title}</h4>
                    </div>
                    <p>{this.props.post.body}</p>
                    <button className="commentbtn-post" onClick={this.viewComments}>
                    {this.state.viewCommentsText}
                    </button>
                    <div >
                    {
                        this.state.showComments ?
                            <Comment
                                postId={this.props.post._id}
                                userInfo={this.props.userInfo}
                            /> : null
                    }
                    </div>
                </div>
            </div>
        )
    }
}
