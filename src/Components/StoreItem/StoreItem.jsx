import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import './StoreItem.css';

const StoreItem = ({item}) => {
    const navigate = useNavigate();

    return (
        <div className="storeItem__item" key={item.storeId} onClick={() => navigate(`/store/${item.storeId}`)}>
            <img src={item.storeImg} alt="" />
            <h4>{item.storeName}</h4>
            {/* <p>{item.storeDescription}</p> */}
            <p>Horario: {item.storeSchedule}</p>
            <div className="storeItem__tags">
                {
                    item.categories.map((item, index) => {
                        return (
                            <p>{item}</p>
                        )
                    })
                }
            </div>
            <Rating name="read-only" value={item.stars} precision={0.5} readOnly />
        </div>
    )
}

export default StoreItem