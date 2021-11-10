import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container, Form, Spinner } from 'react-bootstrap';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const {registerUser,loading, user,authError} = useAuth()
    const [loginData,setLoginData] = useState({})

    const history = useHistory()

    const handleOnBlur = e => {
        const feild = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[feild] = value
        console.log(newLoginData);
        setLoginData(newLoginData)

    }
    const handleSubmit = e => {
        registerUser(loginData?.email, loginData?.password , history)
        e.preventDefault()


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
        {loading && <Spinner animation="border" />}
        {authError &&  <Alert variant='danger'>{authError}</Alert>}
        {user?.email &&  <Alert variant='success'>user created successfully</Alert>}
    </Container>
    );
};

export default Register;