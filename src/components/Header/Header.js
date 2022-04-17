import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignout = () => {
        signOut(auth);
    }

    return (
        <nav className='header '>
            <div className='link-container'>
                <Link to='/home'> Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/aboutme'>About Me</Link>
                <Link to='/checkout'>Check Out</Link>
                {
                    user ?
                        <button type="button" onClick={handelSignout} class="btn btn-secondary ms-4">Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>}
            </div>
        </nav>
    );
};

export default Header; 