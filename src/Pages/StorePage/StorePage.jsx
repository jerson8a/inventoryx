import React from 'react';
import './StorePage.css';

const StorePage = () => {

    const itemsList = [
        {
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://latorremx.vtexassets.com/arquivos/ids/179381/18454-frontal.jpg?v=637974885528300000',
        },
        {
            itemName: 'Capullo Repostera',
            price: 350,
            currency: 'Q.',
            mainImg: 'https://capullo.com.gt/wp-content/uploads/2021/12/Grupo-116.png',
        },
        {
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://latorremx.vtexassets.com/arquivos/ids/179381/18454-frontal.jpg?v=637974885528300000',
        },
        {
            itemName: 'Aceite Capullo 3000 ml',
            price: 67,
            currency: 'Q.',
            mainImg: 'https://latorremx.vtexassets.com/arquivos/ids/179381/18454-frontal.jpg?v=637974885528300000',
        },
    ]

    return (
        <div className="storePage">
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
                                <img src={item.mainImg} alt={item.itemName} />
                                <h3>{item.itemName}</h3>
                                <p>{item.currency}{parseFloat(item.price).toFixed(2)}</p>
                                <button><strong>Añadir al carrito</strong></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StorePage