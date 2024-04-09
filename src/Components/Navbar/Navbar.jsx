import React from 'react';
import { Search, PersonFill, List } from 'react-bootstrap-icons';
import './Navbar.css'
import UserMenu from '../UserMenu/UserMenu';

const Navbar = () => {

    const showMenu = () => {
        let cont = 0;
        const el = document.getElementById('userMenu')
        el.classList.add("userMenu__show");
        document.addEventListener("click", function listenClick() {
            cont++;
            if (cont > 1) {
                document.removeEventListener("click", listenClick);
                el.classList.remove("userMenu__show")
            }
        })
    }

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
                <PersonFill fontSize={20} onClick={() => showMenu()}/>
                <UserMenu />
            </div>
        </nav>
    )
}

export default Navbar