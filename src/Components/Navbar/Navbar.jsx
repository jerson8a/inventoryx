import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, PersonFill, List } from 'react-bootstrap-icons';
import UserMenu from '../UserMenu/UserMenu';
import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate();

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
        <nav className="navbarComponent">
            {/* Menu button */}
            <div className="navbarButtons">
                <List onClick={() => navigate('/home', {replace: true})} />
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