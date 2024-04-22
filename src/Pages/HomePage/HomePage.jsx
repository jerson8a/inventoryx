import React from 'react';
import CategoriesCarrousel from '../../Components/CategoriesCarrousel/CategoriesCarrousel';
import Footer from '../../Components/Footer/Footer';
import Highlights from '../../Components/Highlights/Highlights';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <header className="homeHeader">
                <h1>Inventory x</h1>
                <p>Tu mercado digital</p>
            </header>
            <CategoriesCarrousel />
            <Highlights />
            <Footer />
        </>
    )
}

export default HomePage;