import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPostId: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data.map((post) => {
                    return (
                        <Link to={"/posts/" + post.id} key={post.id}>
                            <Post
                                title={post.title}
                                author='Someone'
                                clicked={() => this.selectedPostHanlder(post.id)} />
                        </Link>
                    )
                }).slice(0, 10);
                this.setState({
                    posts: posts
                });
            });
    }

    selectedPostHanlder = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    render() {
        return (
            <section className="Posts">
                {this.state.posts}
            </section>
        );
    }
}



