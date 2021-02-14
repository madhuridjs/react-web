import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import Posts from './Posts/Posts';
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component{
    state = {
        auth: true
    }
    
    render () {
        
        
        return (
          
            <div className='Blog'>
                  <header>
                      <nav>
                          <ul>
                              <li><NavLink to= "/" exact activeClassName="my-active"
                              activeStyle={{
                                  color: '#fa923f',
                                  textDecoration: 'underline'
                              }} >Posts</NavLink></li>
                              <li><NavLink to={{
                                  pathname: '/new-post',
                                  hash: '#submit',
                                  search: '?quick-submit=true'
                              }}>New Post</NavLink></li>
                            </ul>
                      </nav>
                  </header>
                  <Switch>
                  {this.state.auth ? <Route path = "/new-post" exact component={NewPost} /> : null}
                  <Route path = "/posts" exact component={Posts} />
                  <Route render ={() => <h1>Not Found</h1>}  />
                  {/*<Redirect from= "/" to= "/posts" />*/}
                  {/*<Route path = "/"  component={Posts} />*/}
                  </Switch>
                  { /* <Route path = "/" exact render={() => <h1>Home</h1>} /> */}
                  
            </div>
        );
    }
}

export default Blog;