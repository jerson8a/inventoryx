import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, PersonFill, List, GeoAltFill } from 'react-bootstrap-icons';
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
                    <input type="text" placeholder='¿Qué necesitas hoy?'/>
                    <Search />
                </div>
                <div className="navbar-input">
                    <select name="txtCity" id="txtCity">
                        <option value="Guatemala" selected>Ciudad de Guatemala</option>
                        <option value="Guatemala">Ciudad de Guatemala</option>
                        <option value="Guatemala">Quetzaltenango</option>
                        <option value="Guatemala">Antigua Guatemala</option>
                        <option value="Guatemala">Santa Rosa</option>
                        <option value="Guatemala">Escuintla</option>
                        <option value="Guatemala">Zacapa</option>
                        <option value="Guatemala">Jutiapa</option>
                        <option value="Guatemala">Izabal</option>
                    </select>
                    <GeoAltFill />
                </div>
                <PersonFill fontSize={20} onClick={() => showMenu()}/>
                <UserMenu />
            </div>
        </nav>
    )
}

export default Navbar