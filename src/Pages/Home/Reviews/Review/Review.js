import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({review}) => {
    const {name, add , des} = review
    return (
        <div>
            <Col>
                <Card className='border-0 text-start'>
                    <Card.Body>
                        <Card.Text>
                            {des.slice(0,100)}
                        </Card.Text>
                        <h5>{name}</h5>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;