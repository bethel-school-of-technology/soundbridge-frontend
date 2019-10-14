import React, { Component } from 'react';
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
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <button onClick={this.viewComments}>
                    {this.state.viewCommentsText}
                </button>
                <div>
                    {
                        this.state.showComments ?
                            <Comment
                                postId={this.props.post._id}
                                userInfo={this.props.userInfo}
                            /> : null
                    }
                </div>
            </div>
        )
    }
}
