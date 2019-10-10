import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  state = {
    allPosts: [],
  }

  async componentDidMount() {
    const res = await fetch('https://soundbridge.herokuapp.com/api/posts/get-posts');
    const allPosts = await res.json();
    this.setState({ allPosts });
  }

  render() {
    console.log('all posts: ', this.state.allPosts);
    return (
      <div>
        <div className="home-page-content page-header section-dark" style={{
          backgroundImage:
            "url(" + require("../assets/images/SoundBridge.jpg") + ")"
        }} >
          <div className="filter">
            <div className="content-center"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;