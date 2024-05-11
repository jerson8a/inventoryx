import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import CartItemComponent from '../../Components/CartItemComponent/CartItemComponent';
import './CartPage.css';

const CartPage = () => {

    const cart = useSelector((state) => state.marketCart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="cartPage">
            <Navbar />
            <div className="cartPage__hero">
                <h3>¿Llevas todo lo necesario?</h3>
            </div>
            <div className="cartPage__listItems">
                {
                    cart.length > 0 ? 
                    cart.map((item, index) => {
                        return (
                            <CartItemComponent item={item} key={index} />
                        )
                    })
                    : <p><strong>Parece que no has agregado nada a tu carrito aún</strong></p>
                }
                {
                    cart.length > 0 &&
                    <>
                        <div className="cartPage__total">
                            <p><strong>Cantidad de items: </strong>{cart.reduce((acc, curr) => acc + curr.quantity, 0)}</p>
                        <p><strong>Total: Q.{cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0).toFixed(2)}</strong></p>
                        </div>
                        <button onClick={() => navigate('/payment', {replace: true})}>Ir a pagar</button>
                    </>
                }
            </div>
        </div>
    )
}

export default CartPage