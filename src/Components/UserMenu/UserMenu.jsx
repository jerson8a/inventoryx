import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonCircle, Wallet2, CardList, DoorClosed, InfoCircle, CurrencyDollar, DoorOpen, Cart3 } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setSigned, setLogout } from '../../features/auth/authStore';
import './UserMenu.css';

const UserMenu = () => {
    const isSigned = useSelector((state) => state.isSigned.value);
    const cart = useSelector((state) => state.marketCart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            {
                isSigned === 1 ?
                <div className="userMenu" id='userMenu'>
                    <div className="userMenu__item">
                        <PersonCircle />
                        <p>Mi perfil</p>
                    </div>
                    <div className="userMenu__item" onClick={() => navigate('/mycart')}>
                        <Cart3 />
                        <p>Mi carrito {cart.length > 0 && `(${cart.length})` }</p>
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
                    <div className="userMenu__item" onClick={() => dispatch(setLogout())}>
                        <DoorClosed />
                        <p>Cerrar sesión</p>
                    </div>
                </div>
                : 
                <div className="userMenu" id='userMenu'>
                    <div className="userMenu__item" onClick={() => navigate('/login', {replace: true}) }>
                        <DoorOpen />
                        <p>Iniciar sesión</p>
                    </div>
                    <div className="userMenu__item">
                        <CurrencyDollar />
                        <p>Precios</p>
                    </div>
                    <div className="userMenu__item">
                        <InfoCircle />
                        <p>Ayuda</p>
                    </div>
                </div>

            }
        </>
    )
}

export default UserMenu