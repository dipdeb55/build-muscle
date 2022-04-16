import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header '>
            <div className='link-container'>
                <Link to='/home'> Home</Link>
                <Link to='/services'>Services</Link>
                <Link to="/aboutme">About Me</Link>
            </div>
        </nav>
    );
};

export default Header; 