import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="#home">My Shoe's</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className='mx-3 text-white text-decoration-none' to="/home">Home</NavLink>
                    <NavLink className='mx-3 text-white text-decoration-none' to="/dashboard">Dashboard</NavLink>
                    <NavLink className='mx-3 text-white text-decoration-none' to="/products">Products</NavLink>
                    <NavLink className='mx-3 text-white text-decoration-none' to="login">Login</NavLink>
                    <NavLink className='mx-3 text-white text-decoration-none' to="/review">Review</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;