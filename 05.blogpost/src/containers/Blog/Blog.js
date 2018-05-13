import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Navbar from '../../components/Navbar/Navbar';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts/:id" component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;