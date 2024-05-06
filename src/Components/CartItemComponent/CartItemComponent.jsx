import React, { useState } from 'react';
import { removeItemFromCart, updateItemQuantity } from '../../features/market/marketStore';
import { useSelector, useDispatch } from 'react-redux';
import { Trash3 } from 'react-bootstrap-icons';
import './CartItemComponent.css';

const CartItemComponent = ({item}) => {

    const dispatch = useDispatch();
    const [inputQuantity, setInputQuantity] = useState(item.quantity);

    const updateQuantity = (qt) => {
        dispatch(updateItemQuantity({   itemId: item.itemId, 
                                        quantity: Number(qt)
                                    }));
        setInputQuantity(qt);
    }

    return (
        <div key={item.itemId} className="cartItem">
            <img src="https://cemacogt.vtexassets.com/arquivos/ids/377410/251458_1.jpg?v=638439158111270000" alt="" />
            <div className="cartItem__description">
                <p><strong>{item.itemName}</strong></p>
                <p><strong>Precio unitario: </strong>{item.currency}{item.price.toFixed(2)}</p>
                <p><strong>Proveedor: </strong>Cementos Progreso Petapa</p>
            </div>
            <div className="cartItem__quantityTotal">
                <div className="cartItem__input">
                    <label htmlFor="txtCantidad"><strong>Cantidad: </strong></label>
                    <input type="number" min={1} max={100} value={inputQuantity} onChange={(e) => updateQuantity(e.target.value)}/>
                </div>
                <p><strong>Total: </strong>{item.currency}{(item.quantity * item.price).toFixed(2)}</p>
                <Trash3 title='Eliminar item' onClick={() => dispatch(removeItemFromCart(item))}/>
            </div>
        </div>
    )
}

export default CartItemComponent