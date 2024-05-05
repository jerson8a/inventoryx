import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/market/marketStore';
import './ArticleComponent.css';

const ArticleComponent = ({item}) => {
    const isSigned = useSelector((state) => state.isSigned.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addItem = () => {
        if (isSigned) {
            console.log("Añadiendo item", item.itemId)
            dispatch(addItemToCart({itemId: item.itemId}));
        } else {
            navigate('/Login', {replace: true});
        }
    }

    return (
        <div className="articleComponent__item">
            <div className="articleComponent__itemImg">
                <img src={item.mainImg} alt={item.itemName} />
                <button onClick={() => (addItem())}><strong>Añadir al carrito</strong></button>

            </div>
            <h3>{item.itemName}</h3>
            <p>{item.currency}{parseFloat(item.price).toFixed(2)}</p>
        </div>   
    )
}

export default ArticleComponent