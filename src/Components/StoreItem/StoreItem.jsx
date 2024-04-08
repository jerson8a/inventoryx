import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoreItem.css';

const StoreItem = ({imgSource, storeName, storeSchedule, storeId}) => {
    const navigate = useNavigate();

    return (
        <div className="storeItem" onClick={() => navigate(`/store/${storeId}`)}>
            <img src={imgSource} alt={storeName} />
            <h3>{storeName}</h3>
            <p>{storeSchedule}</p>
            <p className="storeItem__Delivery"><strong>Servicio a domicilio: </strong> SI</p>
        </div>
    )
}

export default StoreItem