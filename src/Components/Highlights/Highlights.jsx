import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoreItem from '../../Components/StoreItem/StoreItem';
import './Highlights.css';

const Highlights = () => {

    const navigate = useNavigate();

    const highlightStoresList = [
        {
            storeId: '1',
            storeName: 'La Torre',
            storeImg: 'https://parquelasamericas.com.gt/wp-content/uploads/2018/05/La-Torre.jpg',
            storeDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quos praesentium, tempora voluptatem modi nemo odio.',
            storeSchedule: '09:00 a 21:00',
            closingSchedule: '21:00',
            storePhoneNumber: '7772-0111',
            stars: 1,
            categories: ['Bebidas', 'Miscelanea', 'Ferretería'],
            delivery: ['PedidosYa',],
        },
        {
            storeId: '2',
            storeName: 'Walmart',
            storeImg: 'https://revcycleintelligence.com/images/site/features/WalmartLogo.jpg',
            storeDescription: 'Descripción de tienda 2',
            storeSchedule: '9:00 a 21:00',
            closingSchedule: '21:00',
            storePhoneNumber: '7772-0111',
            stars: 3.1,
            categories: ['Bebidas', 'Miscelanea', 'Ferretería'],
            delivery: ['PedidosYa',],
        },
        {
            storeId: '3',
            storeName: 'La Barata',
            storeImg: 'https://www.bolsadetrabajoss.com/wp-content/uploads/2019/11/LA-BARATA-EMPLEOS.png',
            storeDescription: 'Descripción de tienda 3',
            storeSchedule: '9:00 a 21:00',
            closingSchedule: '21:00',
            storePhoneNumber: '7772-0111',
            stars: 4,
            categories: ['Bebidas', 'Miscelanea', 'Ferretería'],
            delivery: ['PedidosYa',],
        },
        {
            storeId: '3',
            storeName: 'La Barata',
            storeImg: 'https://www.bolsadetrabajoss.com/wp-content/uploads/2019/11/LA-BARATA-EMPLEOS.png',
            storeDescription: 'Descripción de tienda 3',
            storeSchedule: '9:00 a 21:00',
            closingSchedule: '21:00',
            storePhoneNumber: '7772-0111',
            stars: 3.5,
            categories: ['Bebidas', 'Miscelanea', 'Ferretería',],
            delivery: ['PedidosYa',],
        },
    ]

    return (
        <section className="highlights">
            <h2>Te puede interesar</h2>
            <div className="highlights__section">
                {
                    highlightStoresList.map((item, index) => {
                        return(
                            <StoreItem key={item.storeId} item={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Highlights;