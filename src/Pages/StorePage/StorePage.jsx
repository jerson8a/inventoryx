import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import './StorePage.css';
import ArticleComponent from '../../Components/ArticleComponent/ArticleComponent';

const StorePage = () => {

    const itemsList = [
        {
            itemId: 1,
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
        {
            itemId: 2,
            itemName: 'Capullo Repostera',
            price: 350,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
        {
            itemId: 3,
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
        },
        {
            itemId: 4,
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
                            <ArticleComponent key={item.itemId} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StorePage