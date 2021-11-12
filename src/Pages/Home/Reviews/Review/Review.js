import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({r}) => {
    const {name,review} = r
    return (
        <div>
            <Col>
                <Card className='border-0 text-start'>
                    <Card.Body>
                        <Card.Text>
                            {review.slice(0,100)}
                        </Card.Text>
                        <h5>{name}</h5>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;