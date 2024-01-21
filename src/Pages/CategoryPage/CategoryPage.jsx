import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './CategoryPage.css';

const CategoryPage = () => {
    
    let { categoryId } = useParams();

    const storesArray = [
        {
            storeId: '1',
            storeName: 'La Torre',
            storeImg: '',
            storeDescription: '',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
        {
            storeId: '2',
            storeName: 'Walmart',
            storeImg: '',
            storeDescription: '',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
        {
            storeId: '3',
            storeName: 'La Barata',
            storeImg: '',
            storeDescription: '',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
    ];

    return (
        <div className="categoryPage">
            <div className="categoryPage__Banner">
                <Navbar />
                <h1>{categoryId}</h1>
            </div>
            <div className="categoryPage__items">
                {
                    storesArray.map((item, index) => {
                        return (
                                <div className="storeItem">
                                    <img src="https://parquelasamericas.com.gt/wp-content/uploads/2018/05/La-Torre.jpg" alt="La Torre" />
                                    <h3>{item.storeName}</h3>
                                    <p>{item.storeSchedule}</p>
                                    <p className="storeItem__Delivery"><strong>Servicio a domicilio: </strong> SI</p>
                                </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPage