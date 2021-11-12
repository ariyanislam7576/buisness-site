import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4500/addproduct`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:4500/addproduct/${id}`
        console.log(url);
        const procced = window.confirm('are you sure??')
        if (procced) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {

                        alert('deleted')
                        const availableUser = product.filter(booking => booking._id !== id)
                        setProduct(availableUser)
                    }

                }) 
        }
    }
    return (
        <div>
            <Row xs={1} md={3}>
                {
                    product.map(p => <Col key={p._id}>
                        <Card>
                            <Card.Img variant="top" src={p.img} />
                            <Card.Body className='text-start'>
                                <Card.Title>{p.name}</Card.Title>
                                <strong><p> ${p.price}</p></strong>
                                <Card.Text>
                                    {p.description}
                                </Card.Text>
                                <button className='btn-info rounded' onClick={()=>handleDelete(p._id)}>Delete</button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default ManageProduct;