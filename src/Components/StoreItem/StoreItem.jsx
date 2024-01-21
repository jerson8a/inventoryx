import React from 'react';
import './StoreItem.css';

const StoreItem = ({imgSource, storeName, storeSchedule}) => {
    return (
        <div className="storeItem">
            <img src={imgSource} alt={storeName} />
            <h3>{storeName}</h3>
            <p>{storeSchedule}</p>
            <p className="storeItem__Delivery"><strong>Servicio a domicilio: </strong> SI</p>
        </div>
    )
}

export default StoreItem