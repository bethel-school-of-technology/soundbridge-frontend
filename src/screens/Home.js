import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

class Home extends Component {

  state = {
    allPosts: [],
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:4000/api/posts/get-posts');
    // const res = await fetch('https://soundbridge.herokuapp.com/api/posts/get-posts');
    const allPosts = await res.json();
    this.setState({ allPosts });
  }

  getNewPost = postInfo => {
    this.setState({ allPosts: [...this.state.allPosts, postInfo] });
  }

  render() {
    console.log('all posts: ', this.state.allPosts);
    const params = {
      userId: sessionStorage.getItem('userId'),
      name: sessionStorage.getItem('name'),
      email: sessionStorage.getItem('email'),
      spotify: sessionStorage.getItem('spotify'),
      spotifyId: sessionStorage.getItem('spotifyId'),
      spotifyRefreshToken: sessionStorage.getItem('spotifyRefreshToken'),
      loggedIn: sessionStorage.getItem('loggedIn')
    }
    return (

      <div className="home-page-content page-header section-dark" style={{ backgroundImage: "url(" + require("../assets/images/SoundBridge.jpg") + ")" }} >
        <div className="filter">
          <div className="home-screen-margin">
            {
              params.loggedIn === 'true' ?
                <PostForm getNewPost={this.state.getNewPost} ></PostForm>
                :
                <Link to="/login" ><button>Log in to post</button></Link>
            }

            {
              this.state.allPosts.length > 0 ?
                this.state.allPosts.map((post, i) => {
                  return (
                    <div key={i}>
                      <Post post={post} userInfo={params} />
                    </div>
                  )
                }) : <h1>I got nothing</h1>
            }
          </div>



        </div>
      </div>

    )
  }
}

export default Home;