import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoreItem.css';

const StoreItem = ({storeImg, storeName, storeSchedule, storeId, storePhoneNumber, storeDescription}) => {
    const navigate = useNavigate();

    return (
        <div className="storeItem__item" key={storeId} onClick={() => navigate(`/store/${storeId}`)}>
            <div className="storeItem__itemHover">
                <h2>{storeName}</h2>
                <h3>{storeSchedule}</h3>
                <p><strong>{storePhoneNumber}</strong></p>
            </div>
            <img src={storeImg} alt="" />
            <h4>{storeName}</h4>
            <p>{storeDescription}</p>
        </div>
    )
}

export default StoreItem