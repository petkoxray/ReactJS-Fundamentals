import React from 'react';
import { NavLink } from 'react-router-dom';

const header = ({ loggedIn, onLogout }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <NavLink exact to="/" className="navbar-brand">Hotel System</NavLink>
                <ul className="navbar-nav">
                    {loggedIn && <NavLink exact to="/create" className="nav-link">Add Hotel</NavLink>}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {loggedIn && <a href="javascript:void(0)" className="nav-link" onClick={onLogout}>Logout</a>}
                    </li>
                    <li className="nav-item">
                        {!loggedIn && <NavLink to="/login" className='nav-link'>Login</NavLink>}
                    </li>
                    <li className="nav-item">
                        {!loggedIn && <NavLink to="/register" className='nav-link'>Register</NavLink>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default header;