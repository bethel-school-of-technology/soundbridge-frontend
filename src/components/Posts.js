import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentForm from './CommentForm';

export default class componentName extends Component {

    state = {
        posts: [],
        showCommentForm: false,
        commentBtnText: 'Comment',
    }

    async componentDidMount() {
        // const res = await fetch(`https://soundbridge.herokuapp.com/api/posts/user-posts/${this.props.userInfo._id}`);
        const res = await fetch(`http://localhost:4000/api/posts/user-posts/${this.props.userInfo._id}`);
        const posts = await res.json();
        this.setState({ posts });
    }

    getNewPost = postInfo => {
        this.setState({ posts: [...this.state.posts, postInfo] });
    }

    getNewComment = commentInfo => {
        console.log('this will do something with ', commentInfo);
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
        if (this.state.posts < 1) {
            return <PostForm userInfo={this.props.userInfo} getNewPost={this.getNewPost} />
        }
        let posts = this.state.posts;
        return (
            <div>
                <PostForm userInfo={this.props.userInfo} getNewPost={this.getNewPost} />
                {
                    posts.map((post, i) => {
                        return (
                            <div key={i}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                                <button onClick={this.commentBtnClicked}>
                                    {this.state.commentBtnText}
                                </button>
                                <div >
                                    {
                                        this.state.showCommentForm ?
                                            <CommentForm
                                                postId={post._id}
                                                userInfo={this.props.userInfo}
                                                getNewComment={this.getNewComment}
                                            /> : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

