import React from 'react';
import './ArticleComponent.css';

const ArticleComponent = ({item}) => {
    return (
        <div className="articleComponent__item">
            <div className="articleComponent__itemImg">
                <img src={item.mainImg} alt={item.itemName} />
                <button><strong>Añadir al carrito</strong></button>

            </div>
            <h3>{item.itemName}</h3>
            <p>{item.currency}{parseFloat(item.price).toFixed(2)}</p>
        </div>   
    )
}

export default ArticleComponent