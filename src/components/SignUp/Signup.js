import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    if (user) {
        navigate('/checkout');
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <h2 className='text-white'>Sign Up</h2>
            <div className='d-flex  justify-content-center'>
                <Form onSubmit={handleCreateUser} className='w-50 text-white mt-4'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Name " required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    {error?.password && <p className="text-danger">{error.password}</p>}
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>

                    <p style={{ color: 'red' }}>{error}</p>
                    <Button onClick={() => createUserWithEmailAndPassword(email, password)} className='mt-4 px-5' variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Signup; 