import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Trash3 } from 'react-bootstrap-icons';
import './CartPage.css';

const CartPage = () => {
    return (
        <div className="cartPage">
            <Navbar />
            <div className="cartPage__hero">
                <h3>¿Llevas todo lo necesario?</h3>
            </div>
            <div className="cartPage__listItems">
                <div className="cartPage__item">
                    <img src="https://cemacogt.vtexassets.com/arquivos/ids/377410/251458_1.jpg?v=638439158111270000" alt="" />
                    <div className="item__description">
                        <p><strong>Cemento UGC 1600PSI</strong></p>
                        <p><strong>Precio unitario: </strong>Q150.75</p>
                        <p><strong>Proveedor: </strong>Cementos Progreso Petapa</p>
                    </div>
                    <div className="item__quantityTotal">
                        <div className="item__input">
                            <label htmlFor="txtCantidad"><strong>Cantidad: </strong></label>
                            <input type="number" min={1} max={100} value={1}/>
                        </div>
                        <p><strong>Total: </strong>Q150.75</p>
                        <Trash3 title='Eliminar item'/>
                    </div>
                </div>
                <div className="cartPage__total">
                    <p><strong>Cantidad de items: </strong>2</p>
                    <p><strong>Total: Q301.50</strong></p>
                </div>
                <button>Ir a pagar</button>
            </div>
        </div>
    )
}

export default CartPage