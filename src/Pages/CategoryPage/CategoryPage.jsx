import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import StoreItem from '../../Components/StoreItem/StoreItem';
import './CategoryPage.css';

const CategoryPage = () => {
    
    let { categoryId } = useParams();

    const storesArray = [
        {
            storeId: '1',
            storeName: 'La Torre',
            storeImg: 'https://parquelasamericas.com.gt/wp-content/uploads/2018/05/La-Torre.jpg',
            storeDescription: 'Descripción de tienda 1',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
            storePhoneNumber: '7772-0111',
        },
        {
            storeId: '2',
            storeName: 'Walmart',
            storeImg: 'https://revcycleintelligence.com/images/site/features/WalmartLogo.jpg',
            storeDescription: 'Descripción de tienda 2',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
            storePhoneNumber: '7772-0111',
        },
        {
            storeId: '3',
            storeName: 'La Barata',
            storeImg: 'https://www.bolsadetrabajoss.com/wp-content/uploads/2019/11/LA-BARATA-EMPLEOS.png',
            storeDescription: 'Descripción de tienda 3',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
            storePhoneNumber: '7772-0111',
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
                            <StoreItem key={item.storeId} storeId={item.storeId} storeImg={item.storeImg} storeName={item.storeName} storeSchedule={item.storeSchedule} storePhoneNumber={item.storePhoneNumber} storeDescription={item.storeDescription}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPage