import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import './StorePage.css';

const StorePage = () => {

    const itemsList = [
        {
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
        {
            itemName: 'Capullo Repostera',
            price: 350,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
        {
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
        {
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
    ]

    return (
        <div className="storePage">
            <Navbar />
            <div className="storePage__banner">
                <h1>La Torre</h1>
                <p>Artículos de consumo diario</p>
                <p><strong>Horario de atención: </strong>Lunes a viernes de 10:00 a 21:00</p>
            </div>
            <div className="storePage__itemList">
                {
                    itemsList.map((item, index) => {
                        return (
                            <div className="storePage__item">
                                <div className="storePage__itemImg">
                                    <img src={item.mainImg} alt={item.itemName} />
                                    <button><strong>Añadir al carrito</strong></button>

                                </div>
                                <h3>{item.itemName}</h3>
                                <p>{item.currency}{parseFloat(item.price).toFixed(2)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StorePage