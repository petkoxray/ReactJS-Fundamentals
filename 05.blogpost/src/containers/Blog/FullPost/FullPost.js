import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../../components/UI/Spinner/Spinner';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        const isUpdatable = postId && (!this.state.loadedPost ||
            (this.state.loadedPost && (this.state.loadedPost.id !== postId)));

        if (isUpdatable) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
                .then((response) => {
                    this.setState({
                        loadedPost: response.data
                    });
                });
        }
    }

    render() {
        let post = <Spinner />;

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body.substr(0, 200)}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;