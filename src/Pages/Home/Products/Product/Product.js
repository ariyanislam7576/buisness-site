import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {name , img , des ,price} = product
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-start'>
                        <Card.Title>{name}</Card.Title>
                        <strong><p> ${price}</p></strong>
                        <Card.Text>
                           {des}
                        </Card.Text>
                        <NavLink to='/placeorder'>
                        <button className='btn-info rounded px-2 fw-800'>Bay now</button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;