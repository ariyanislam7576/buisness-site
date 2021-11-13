import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
       <Row>
           <div>
           <Navbar bg="primary" expand='lg' variant="dark">
            <Container>
                <Navbar.Brand to="#home">My Shoe's</Navbar.Brand>
                <Nav className="me-auto d-flex flex-row">
                    <NavLink className='mx-2 text-white text-decoration-none' to="/home">Home</NavLink>
                    <NavLink className='mx-2 text-white text-decoration-none' to="/dashboard">Dashboard</NavLink>
                    {user.email ?
                        <Button onClick={logOut} className='btn-primary border-0'>Logout</Button>
                        :
                        <NavLink className='mx-2 text-white text-decoration-none' to="login">Login</NavLink>}
                </Nav>
               {user.email && <Navbar.Text>
                   <p>{user?.displayName}</p>
                </Navbar.Text>}
            </Container>
        </Navbar>
           </div>
       </Row>
    );
};

export default NavBar;