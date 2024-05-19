import React from 'react';
import './DashboardPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import OrderItemComponent from '../../Components/OrderItemComponent/OrderItemComponent';

const DashboardPage = () => {

    const activeOrders = [
        {
            orderId: '#879KOI',
            orderStatus: 'Preparando',
            orderDate: '20/05/2024',
            items: [
                {
                    itemId: 1,
                    itemName: 'Aceite Capullo 3000 ml',
                    price: 67,
                    currency: 'Q.',
                    itemImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
                    quantity: 2,
                    total: 134,
                },
                {
                    itemId: 2,
                    itemName: 'Capullo Repostera',
                    price: 350,
                    currency: 'Q.',
                    itemImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
                    quantity: 2,
                    total: 700,
                },
            ]
        },
        {
            orderId: '#104KLI',
            orderStatus: 'En tránsito',
            orderDate: '20/05/2024',
            items: [
                {
                    itemId: 3,
                    itemName: 'Cemento UGC 3000 PSI',
                    price: 150.75,
                    currency: 'Q.',
                    itemImg: 'https://cemacogt.vtexassets.com/arquivos/ids/377410/251458_1.jpg?v=638439158111270000',
                    quantity: 2,
                    total: 301.5,
                },
                {
                    itemId: 4,
                    itemName: 'Aceite Capullo 3000 ml',
                    price: 67,
                    currency: 'Q.',
                    itemImg: 'https://woodly.ecom.themepreview.xyz/home02/wp-content/uploads/sites/3/2023/08/fp-2-3.jpg',
                    quantity: 2,
                    total: 134,
                },
            ]
        }
    ]

    return (
        <>
            <Navbar />
            <div className="dashboardPage__header">

            </div>
            <div className="dashboardPage__activeOrders">
                <h3>Mis órdenes activas</h3>
                {
                    activeOrders.map((order, index) => {
                        return(
                            <div className="activeOrder__container" key={index}>
                                <div className="activeOrder__item">
                                    <p><strong>Orden {order.orderId}</strong></p>
                                    <p><strong>Estado: </strong>{order.orderStatus}</p>
                                    <p><strong>Fecha: </strong>{order.orderDate}</p>
                                    <button>Rastrear</button>
                                </div>
                                {
                                    order.items.map((item, itemIndex) => {
                                        return (
                                            <OrderItemComponent key={itemIndex} itemData={item} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* Historial de órdenes */}
        </>
    )
}

export default DashboardPage