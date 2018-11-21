import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import SinglePost from '../singlePost/singlePost';
import './style.css';

const Post = (props) => {
    return (
      <BrowserRouter> 
        <div>

           {  
                props.posts.map((post, index) => (
                    
                    <li className = "posts" key = {index}>
                    
                       <Link to ="/singlePost"> <h1> {post.title} </h1>   {post.body}  </Link>

                       <h5>{post.date} </h5>
                    </li>
    
                ))    
            }

        
            
            <Route path = "/singlePost" component = {SinglePost} />
                
        </div>
        </BrowserRouter>
    )

}

export default Post;


