import React from 'react';
import './OrderItemComponent.css';

const OrderItemComponent = ({itemData}) => {
    return (
        <div className="orderItem">
            <img src="https://cemacogt.vtexassets.com/arquivos/ids/377410/251458_1.jpg?v=638439158111270000" alt="" />
            <div className="orderItem__data">
                <p><strong>{itemData.itemName}</strong></p>
                <p>Cantidad: {itemData.quantity}</p>
                <p>Precio: Q{itemData.price.toFixed(2)}</p>
                <p>Total: Q{itemData.total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default OrderItemComponent