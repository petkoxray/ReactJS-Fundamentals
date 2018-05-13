import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Posts</NavLink></li>
                    <li><NavLink to="/new-post">New post</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default navbar;