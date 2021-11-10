import React from 'react';
import { Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <Row className='mx-2'>
                <div className='col-md-3 text-white text-start'>
                    <h1>My Shoe's</h1>
                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, neque id cursus ucibus, tortor neque egestas augue, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                </div>
                <div className='col-md-3 text-white text-start'>
                    <p><strong>useful links</strong></p>
                    <p>About My Shoe's</p>
                    <p>How Shop on My Shoe's</p>
                    <p>FAQ</p>
                    <p>Login</p>
                    
                </div>
                <div className='col-md-3 text-white text-start'>
                <p><strong>Customer services</strong></p>
                    <p>Payment method</p>
                    <p>Money back guarantee</p>
                    <p>Returns</p>
                    <p>Shipping</p>
                    <p>Terms and condition</p>
                </div>
                <div className='col-md-3 text-white text-start'>
                <p><strong>Contact Us</strong></p>
                    <p>FaceBook</p>
                    <p>Instagram</p>
                    <p>Twtter</p>
                    <p>You tube</p>
                    <p>Help</p>
                </div>
            </Row>
        </div>
    );
};

export default Footer;