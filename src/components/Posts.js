import React, { Component } from 'react';
import PostForm from './PostForm';

export default class componentName extends Component {

    state = {
        posts: [],
    }

    async componentDidMount() {
        const res = await fetch(`http://localhost:4000/api/posts/user-posts/${this.props.userInfo._id}`);
        const posts = await res.json();
        this.setState({ posts });
    }

    render() {
        if (this.state.posts < 1) {
            return <h1>loading...</h1>
        }
        const posts = this.state.posts;
        return (
            <div>
                <PostForm userInfo={this.props.userInfo} />
                {
                    posts.map(post => {
                        return (
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

