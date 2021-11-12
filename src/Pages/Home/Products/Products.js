import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';


const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4500/addproduct')
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
                    products.map(product => <Product
                    key={product._id}
                    product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;