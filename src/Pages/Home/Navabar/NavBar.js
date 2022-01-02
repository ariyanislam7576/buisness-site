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
                </Nav>
                
                {user.email &&
                    <Button onClick={logOut} className='m-2'>Logout</Button>}
                    {user.email && <Navbar.Text>
               <img style={{width: "40px", borderRadius: "50%"}} src={user?.photoURL} alt="" />
            </Navbar.Text>}
            </Container>
        </Navbar>
           </div>
       </Row>
    );
};

export default NavBar;