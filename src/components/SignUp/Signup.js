import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Signup = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    })


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


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
            setErrors({ ...errors, password: "Minimum 6 charecter" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handelConfirmPasswordChange = event => {
        if (event.targrt.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...setErrors, password: "" })
        } else {
            setErrors({ ...errors, password: "Password Not Matched" })
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }
    }


    const handelLogin = event => {
        event.preventDefault();

        console.log(userInfo.email)
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate('/login')
    }

    if (loading) {
        <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-white'>Sign Up</h2>
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className='mt-4' onChange={handelConfirmPasswordChange} type="password" placeholder="ConfirmPassword" required />
                    </Form.Group>
                    {errors?.password && <p className="text-danger">{errors.password}</p>}
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>

                    <p className='text-danger'>{error?.message}</p>
                    <Button onClick={() => createUserWithEmailAndPassword(userInfo.email, userInfo.password)} className='mt-4 px-5' variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Signup; 