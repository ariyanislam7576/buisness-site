import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const Review = ({ r }) => {
    const { name, review, rating, img } = r
    return (
        <div>
            <Col>
                <Card className='border-0 text-start'>
                    <Card.Body>
                    <Card.Img className='w-50 m-5 rounded-circle' variant="top" src={img} />
                        <Card.Text>
                            {review.slice(0, 100)}
                        </Card.Text>
                        <h5>{name}</h5>
                    </Card.Body>

                    <Box>
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>

                </Card>
            </Col>
        </div>
    );
};

export default Review;
/*<Col>
            <Card>
                <Card.Img className='w-50 m-5 rounded-circle' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>*/