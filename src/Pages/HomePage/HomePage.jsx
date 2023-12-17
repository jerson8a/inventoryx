import React from 'react';
import { Search, PersonFill, List } from 'react-bootstrap-icons';
import CategoriesCarrousel from '../../Components/CategoriesCarrousel/CategoriesCarrousel';
import Footer from '../../Components/Footer/Footer';
import Highlights from '../../Components/Highlights/Highlights';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <header className="homeHeader">
                <nav className="homeHeader__navbar">
                    {/* Menu button */}
                    <div className="homeHeader__navbarButtons">
                        <List />
                    </div>
                    {/* Navbar buttons in the right */}
                    <div className="homeHeader__navbarButtons">
                        <div className="homeHeader__navbar-input">
                            <input type="text" placeholder='What are you looking for today?'/>
                            <Search />
                        </div>
                        <PersonFill fontSize={20}/>
                    </div>
                </nav>
                <h1>Inventory X</h1>
                <p>Your digital store</p>
            </header>
            <CategoriesCarrousel />
            <Highlights />
            <Footer />
        </>
    )
}

export default HomePage;