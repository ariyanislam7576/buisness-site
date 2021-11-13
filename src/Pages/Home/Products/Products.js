import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Product from './Product/Product';


const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://immense-crag-91398.herokuapp.com/addproduct')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return (
        <Container className='my-5'>
            <h3>Our Products</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    products.slice(0,6).map(product => <Product
                    key={product._id}
                    product={product}></Product>)
                }
            </Row>
            <NavLink to='/moreproduct'>More product</NavLink>
        </Container>
    );
};

export default Products;