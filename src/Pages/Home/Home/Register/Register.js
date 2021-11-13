import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container, Form, Spinner } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const {registerUser,loading,authError, googleSignIn} = useAuth()
    const [loginData,setLoginData] = useState({})

    const history = useHistory()
    const location = useLocation()

    const handleOnBlur = e => {
        const feild = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[feild] = value
        setLoginData(newLoginData)

    }
    const handleSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }
    return (
        <Container className='my-4'>
        <h4>Register</h4>
       {!loading && <Form onSubmit={handleSubmit} className='my-5'>
            <Form.Group className="mb-3 w-25 mx-auto" controlId="formGroupEmail">
                <Form.Control
                name='name'
                onBlur={handleOnBlur}
                 type="text"
                  placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3 w-25 mx-auto" controlId="formGroupEmail">
                <Form.Control 
                name='email'
                onBlur={handleOnBlur}
                type="email" 
                placeholder="Enter email" />
            </Form.Group>
            <Form.Group
             className="mb-3 w-25 mx-auto" controlId="formGroupPassword">
                <Form.Control 
                name='password'
                onBlur={handleOnBlur}
                type="password" 
                placeholder="Password" />
            </Form.Group>
            <Button type='submit' className='btn-info'>Submit</Button>
            <p>Already registerd?? <Link to='/login'>Login</Link></p>
        </Form>}
        <button onClick={handleGoogleSignIn} className='btn-secondary'>Sign in with Google</button>
        {loading && <Spinner animation="border" />}
        {authError &&  <Alert variant='danger'>{authError}</Alert>}
    </Container>
    );
};

export default Register;