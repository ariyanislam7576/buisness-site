import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Products></Products>
        <Shipping></Shipping>
        <Reviews></Reviews>
        </div>
    );
};

export default Home;