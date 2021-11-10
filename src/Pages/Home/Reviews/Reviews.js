import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review/Review';

const reviews = [
    {
        id: 1,
        name: "Sofiul alom",
        add: "Bangladesh",
        des: "We all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedback"
    },
    {
        id: 2,
        name: "Jhon dalton",
        add: "USA",
        des: "We all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedback"
    },
    {
        id: 3,
        name: "Fakusi huku",
        add: "France",
        des: "We all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedbackWe all need people who will give us feedback"
    },
]

const Reviews = () => {
    return (
        <Container className='my-3'>
            <h3>Customar Reviews</h3>
            <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(review => <Review
                        key={review.id}
                        review={review}
                        ></Review>)
                    }
            </Row>
        </Container>
    );
};

export default Reviews;