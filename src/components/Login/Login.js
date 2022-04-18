import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    })


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);


    const handelEmailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handelPasswordChange = (event) => {
        const password = /.{6,}/;
        const validPassword = password.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Minimum 6 charecter" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }


    const handelLogin = event => {
        event.preventDefault();

        console.log(userInfo.email)

        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }



    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate('/checkout')
    }

    return (
        <div>
            <h2 className='text-white'> Please log in</h2>
            <div className='d-flex  justify-content-center'>
                <Form onSubmit={handelLogin} className='w-50 text-white mt-4'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control onChange={handelEmailChange} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={handelPasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <p>Don't have an account.<Link className='text-decoration-none' to='/signup'> SignUp</Link></p>
                    <p className='text-danger'>{error?.message}</p>
                    <Form.Group>
                        <Button className='me-3' onClick={() => signInWithGoogle()} variant="primary">Google</Button>
                        <Button onClick={() => signInWithGithub()} variant="dark">GitHub</Button>
                    </Form.Group>
                    <Button onClick={() => signInWithEmailAndPassword(userInfo.email, userInfo.password)} className='mt-4 px-5' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;