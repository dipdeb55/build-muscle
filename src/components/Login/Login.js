import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
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


    const handelEmailChange = event => {
        const email = event.target.value;

        if (email) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handelPasswordChange = event => {
        const password = /.{6,}/;
        const validPassword = password.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setUserInfo({ ...errors, password: "Minimum 6 charecter" })
            setErrors({ ...userInfo, password: "" })
        }
    }


    const handelLogin = event => {
        event.preventDefault();

        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate('/services')
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
                    <p className='text-danger'>{error?.message}</p>
                    <Button onClick={() => signInWithEmailAndPassword(userInfo.email, userInfo.password)} className='mt-4 px-5' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;