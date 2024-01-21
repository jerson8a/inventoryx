import React from 'react';
import { Search, PersonFill, List } from 'react-bootstrap-icons';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Menu button */}
            <div className="navbarButtons">
                <List />
            </div>
            {/* Navbar buttons in the right */}
            <div className="navbarButtons">
                <div className="navbar-input">
                    <input type="text" placeholder='What are you looking for today?'/>
                    <Search />
                </div>
                <PersonFill fontSize={20}/>
            </div>
        </nav>
    )
}

export default Navbar