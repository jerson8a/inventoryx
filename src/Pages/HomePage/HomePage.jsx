import React from 'react';
import CategoriesCarrousel from '../../Components/CategoriesCarrousel/CategoriesCarrousel';
import Footer from '../../Components/Footer/Footer';
import Highlights from '../../Components/Highlights/Highlights';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';

const HomePage = () => {
    return (
        <>
            <header className="homeHeader">
                <Navbar />
                <h1>Inventory X</h1>
                <p>Always available</p>
            </header>
            <CategoriesCarrousel />
            <Highlights />
            <Footer />
        </>
    )
}

export default HomePage;