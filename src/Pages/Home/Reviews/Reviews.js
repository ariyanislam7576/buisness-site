import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4500/addreview')
        .then(res => res.json())
        .then(data => {
           setReviews(data)
        })
    },[])
    return (
        <Container className='my-3'>
            <h3>Customar Reviews</h3>
            <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(r => <Review
                        key={r._id}
                        r={r}
                        ></Review>)
                    }
            </Row>
        </Container>
    );
};

export default Reviews;