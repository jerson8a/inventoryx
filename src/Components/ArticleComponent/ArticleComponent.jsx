import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/market/marketStore';
import './ArticleComponent.css';
import { CartCheckFill } from 'react-bootstrap-icons';

const ArticleComponent = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSigned = useSelector((state) => state.isSigned.value);
    const cart = useSelector((state) => state.marketCart.value);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addItem = () => {
        if (isSigned) {
            item.quantity = 1;
            dispatch(addItemToCart(item));
        } else {
            navigate('/Login', {replace: true});
        }
    }

    useEffect(() => {
        cart.filter((cartItem) => {
            cartItem.itemId == item.itemId &&
            setIsAddedToCart(true)
        })
    }, [cart])

    return (
        <div className="articleComponent__item">
            <div className="articleComponent__itemImg">
                <img src={item.itemImg} alt={item.itemName} />
                {
                    isAddedToCart ?
                    <button className='buttonRemoveFromCart'><CartCheckFill /></button>
                    :
                    <button className='buttonAddToCart' onClick={() => (addItem())}><strong>Añadir al carrito</strong></button>
                }
            </div>
            <h3>{item.itemName}</h3>
            <p>{item.currency}{parseFloat(item.price).toFixed(2)}</p>
        </div>   
    )
}

export default ArticleComponent