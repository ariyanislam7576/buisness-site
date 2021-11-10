import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';


const products = [
    {
        id: 1,
        name: "nike 233",
        des: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the.",
        price: 300,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 2,
        name: "nike 200",
        des: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the.",
        price: 260,
        rating: 3.5,
        img: "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: 3,
        name: "Addidas 233",
        des: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the.",
        price: 130,
        rating: 4.0,
        img: "https://images.unsplash.com/photo-1556048219-bb6978360b84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: 4,
        name: "Bata",
        des: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the.",
        price: 100,
        rating: 3.5,
        img: "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: 5,
        name: "Apex",
        des: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the.",
        price: 150,
        rating: 4.2,
        img: "https://images.unsplash.com/photo-1617606002806-94e279c22567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 6,
        name: "Lotto",
        des: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the.",
        price: 200,
        rating: 3.9,
        img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
]

const Products = () => {
    return (
        <Container className='my-5'>
            <h3>Our Products</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;