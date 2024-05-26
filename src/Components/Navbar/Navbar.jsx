import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, PersonFill, HouseFill, GeoAltFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import './Navbar.css'

const Navbar = () => {
    const isSigned = useSelector((state) => state.isSigned.value);
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
                <HouseFill onClick={() => navigate('/home', {replace: true})} />
            </div>
            {/* Navbar buttons in the right */}
            <div className="navbarButtons">
                <div className="navbar-input">
                    <input type="text" placeholder='¿Qué necesitas hoy?'/>
                    <Search />
                </div>
                <div className="navbar-input">
                    <select name="txtCity" id="txtCity" defaultValue={'Guatemala'}>
                        <option value="Guatemala">Ciudad de Guatemala</option>
                        <option value="Quetzaltenango">Quetzaltenango</option>
                        <option value="Antigua Guatemala">Antigua Guatemala</option>
                        <option value="Santa Rosa">Santa Rosa</option>
                        <option value="Escuintla">Escuintla</option>
                        <option value="Zacapa">Zacapa</option>
                        <option value="Jutiapa">Jutiapa</option>
                        <option value="Izabal">Izabal</option>
                    </select>
                    <GeoAltFill />
                </div>
                {
                    isSigned ? 
                    <PersonFill fontSize={20} onClick={() => showMenu()}/>
                    : 
                    <>
                        <button className="navbar__loginButton" onClick={() => navigate('/login', {replace: true}) }>
                            Iniciar sesión
                        </button>
                        <button className="navbar__signupButton" onClick={() => navigate('/login', {replace: true})}>
                            Registrarme
                        </button>
                    </>
                }
                <UserMenu />
            </div>
        </nav>
    )
}

export default Navbar