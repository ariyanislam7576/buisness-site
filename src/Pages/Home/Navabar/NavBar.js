import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="#home">My Shoe's</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className='mx-3 text-white text-decoration-none' to="/home">Home</NavLink>
                    <NavLink className='mx-3 text-white text-decoration-none' to="/dashboard">Dashboard</NavLink>
                    <NavLink className='mx-3 text-white text-decoration-none' to="/products">Products</NavLink>
                    {user.email ?
                        <Button onClick={logOut} className='btn-dark border-0'>Logout</Button>
                        :
                        <NavLink className='mx-3 text-white text-decoration-none' to="login">Login</NavLink>}
                    <NavLink className='mx-3 text-white text-decoration-none' to="/review">Review</NavLink>
                </Nav>
               {user.email && <Navbar.Text>
                    Signed in as: <p>{user?.name}</p>
                </Navbar.Text>}
            </Container>
        </Navbar>
    );
};

export default NavBar;