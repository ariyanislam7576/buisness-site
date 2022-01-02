import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const ManageOrder = () => {

    const [order, setOrder] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        fetch(`https://immense-crag-91398.herokuapp.com/myorder`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])
 

    const handleDelete = id => {
        const url = `https://immense-crag-91398.herokuapp.com/myorder/${id}`
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
                        const availableUser = order.filter(booking => booking._id !== id)
                        setOrder(availableUser)
                    }

                })
        }
    }
    return (
        <div>
            <ul>
            {
                    order.map(booking =>
                        <Row key={booking._id} xs={1} md={2} className="g-4">
                                <Col>
                                    <Card className='text-start'>
                                        <Card.Body>
                                            <Card.Title> {booking.product} </Card.Title>
                                            <h5>Product Quantity: {booking?.quantity}</h5>
                                            <Card.Text>
                                                Product id: {booking?._id}
                                            </Card.Text>
                                            <h6>Customar id: {user.providerData[0].uid}</h6>
                                            <p>Total price : {booking?.price * booking?.quantity}</p>
                                        </Card.Body>
                                        {booking ?
                                 <button className='btn-info' onClick={() => handleDelete(booking._id)}>delete</button>
                                         : <p></p>}
                                    </Card>
                                </Col>
                        </Row>
                    )
                }
            </ul>
        </div>
    );
};

export default ManageOrder;