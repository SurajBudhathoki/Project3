import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from '../login/login';
import Register from '../register/register';
import Post from '../postFeed/Post';
import Newpost from '../newPost/newPost';
import './style.css';

const Navbar = (props) => {
    return(
        <BrowserRouter>
        <div>
            <header>
               <h1> Logo </h1> 
               <li className = "buttons">
              <Link to="/login">Login</Link>
              </li>
              <li className = "buttons">
              <Link to="/register">Register</Link>
                </li>
                
                <nav>
                <li className = "navs">
              <Link to="/">General</Link>
            </li>
            <li className = "navs">
              <Link to="/categories">Categories</Link>
            </li>
            <li className = "navs">
              <Link to="/new"> New</Link>
            </li>
                </nav>
            </header>
            <br></br><br></br>
  
  
          <Route path="/general" component={Post} />
          <Route path="/categories"  />
          <Route path="/new" component={Newpost} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    )

}

export default Navbar;