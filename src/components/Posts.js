import React, { Component } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import Post from './Post';

export default class componentName extends Component {

    state = {
        posts: [],
        showCommentForm: false,
        commentBtnText: 'Comment',
    }

    async componentDidMount() {
        const res = await fetch(`https://soundbridge.herokuapp.com/api/posts/user-posts/${this.props.userInfo.userId}`);
        // const res = await fetch(`http://localhost:4000/api/posts/user-posts/${this.props.userInfo.userId}`);
        const posts = await res.json();
        this.setState({ posts });
    }

    getNewPost = postInfo => {
        this.setState({ posts: [...this.state.posts, postInfo] });
    }

    postDeleted = postId => {
        // axios.delete('http://localhost:4000/api/posts/delete-post', { params: { postId } })
        axios.delete('https://soundbridge.herokuapp.com/api/posts/delete-post', { params: { postId } })
            .then(async () => {
                // const newRes = await fetch(`http://localhost:4000/api/posts/user-posts/${this.props.userInfo.userId}`);
                const newRes = await fetch(`https://soundbridge.herokuapp.com/api/posts/user-posts/${this.props.userInfo.userId}`);
                const posts = await newRes.json();
                this.setState({ posts });
            })
            .catch(err => console.log(err));
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
                    posts.reverse().map((post, i) => {
                        return (
                            <div key={i}>
                                <Post
                                    post={post}
                                    postDeleted={this.postDeleted}
                                    postIndex={i}
                                    userInfo={this.props.userInfo}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

