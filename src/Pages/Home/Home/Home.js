import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavBar from '../Navabar/NavBar';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <Products></Products>
        <Shipping></Shipping>
        <Reviews></Reviews>
    <Footer></Footer>
        </div>
    );
};

export default Home;