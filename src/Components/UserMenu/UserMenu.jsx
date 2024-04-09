import React from 'react';
import { PersonCircle, Wallet2, CardList, DoorClosed, InfoCircle } from 'react-bootstrap-icons';
import './UserMenu.css';

const UserMenu = () => {
    return (
        <div className="userMenu" id='userMenu'>
            <div className="userMenu__item">
                <PersonCircle />
                <p>Mi perfil</p>
            </div>
            <div className="userMenu__item">
                <Wallet2 />
                <p>Suscripción</p>
            </div>
            <div className="userMenu__item">
                <InfoCircle />
                <p>Ayuda</p>
            </div>
            <div className="userMenu__item">
                <CardList />
                <p>Términos y condiciones</p>
            </div>
            <div className="userMenu__item">
                <DoorClosed />
                <p>Cerrar sesión</p>
            </div>
        </div>
    )
}

export default UserMenu