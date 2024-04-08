import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './CategoryPage.css';
import StoreItem from '../../Components/StoreItem/StoreItem';

const CategoryPage = () => {
    
    let { categoryId } = useParams();

    const storesArray = [
        {
            storeId: '1',
            storeName: 'La Torre',
            storeImg: 'https://parquelasamericas.com.gt/wp-content/uploads/2018/05/La-Torre.jpg',
            storeDescription: '',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
        {
            storeId: '2',
            storeName: 'Walmart',
            storeImg: 'https://revcycleintelligence.com/images/site/features/WalmartLogo.jpg',
            storeDescription: '',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
        {
            storeId: '3',
            storeName: 'La Barata',
            storeImg: 'https://www.bolsadetrabajoss.com/wp-content/uploads/2019/11/LA-BARATA-EMPLEOS.png',
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
                            <StoreItem storeId={item.storeId} imgSource={item.storeImg} storeName={item.storeName} storeSchedule={item.storeSchedule} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPage