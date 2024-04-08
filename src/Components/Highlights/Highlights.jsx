import React from 'react';
import emptyStreet from '../../assets/img/empty_street.svg';
import './Highlights.css';
import { useNavigate } from 'react-router-dom';

const Highlights = () => {

    const navigate = useNavigate();

    const highlightStoresList = [
        {
            storeId: '1',
            storeName: 'La Torre',
            storeImg: 'https://parquelasamericas.com.gt/wp-content/uploads/2018/05/La-Torre.jpg',
            storeDescription: 'Descripción de tienda 1',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
        {
            storeId: '2',
            storeName: 'Walmart',
            storeImg: 'https://revcycleintelligence.com/images/site/features/WalmartLogo.jpg',
            storeDescription: 'Descripción de tienda 2',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
        {
            storeId: '3',
            storeName: 'La Barata',
            storeImg: 'https://www.bolsadetrabajoss.com/wp-content/uploads/2019/11/LA-BARATA-EMPLEOS.png',
            storeDescription: 'Descripción de tienda 3',
            storeSchedule: 'Horario: Lunes a viernes 09:00 a 21:00',
        },
    ]

    return (
        <section className="highlights">
            <h2>Nuestros destacados</h2>
            <div className="highlights__section">
                {
                    highlightStoresList.map((item, index) => {
                        return(
                            <div className="highlights__item" onClick={() => navigate(`/store/${item.storeId}`)}>
                                <img src={item.storeImg} alt="" />
                                <h4>{item.storeName}</h4>
                                <p>{item.storeDescription}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Highlights;