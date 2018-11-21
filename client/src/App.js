import React, { Component } from 'react';
import axios from 'axios';
import Post from './components/postFeed/Post';
import Navbar from './components/navbar/navbar';
import './App.css';

class App extends Component {

  state = {
    postList : [],
    newPost: '',

  }

  componentDidMount(){

    this.getPosts();
  }

  getPosts = () => {
    axios.get('/api/posts')
    .then((result) => {
     
      this.setState({postList: result.data});
      console.log(this.state.postList);
    })
  }

  render() {
    return (
      <div className="App">
       <Navbar  /> 
       <br></br>
       <br></br>  
         
          <Post posts = {this.state.postList} />
       
          <button> Create a new post</button>
      </div>
    );
  }
}

export default App;
