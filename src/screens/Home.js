import React, { Component } from 'react';
import './Home.css';
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

  render() {
    console.log('all posts: ', this.state.allPosts);
    return (

      <div className="home-page-content page-header section-dark" style={{ backgroundImage: "url(" + require("../assets/images/SoundBridge.jpg") + ")" }} >
        <div className="filter">
        <div className="home-screen-margin">
          <PostForm></PostForm>
          </div>
            
            

          
        </div>
      </div>

        )
      }
    }
    
export default Home;