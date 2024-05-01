import React from 'react';
import { CaretLeftFill, CaretRightFill, Shop } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './CategoriesCarrousel.css';

const CategoriesCarrousel = () => {

    const navigate = useNavigate();

    const categoriesArray = [
                                {
                                    id: 'Supermarkets',
                                    spanishName: 'Supermercados',
                                },
                                {
                                    id: 'Pharmacies',
                                    spanishName: 'Farmacias',
                                },
                                {
                                    id: 'Ironmongeries',
                                    spanishName: 'Ferreterías',
                                },
                                {
                                    id: 'BreadStores',
                                    spanishName: 'Panaderías',
                                },
                                {
                                    id: 'Clothes',
                                    spanishName: 'Ropa y accesorios',
                                },
                                {
                                    id: 'Restaurants',
                                    spanishName: 'Restaurantes',
                                },
                                {
                                    id: 'LiquorStores',
                                    spanishName: 'Licores y más',
                                },
                            ];

    return (
        <section className="categoriesCarrousel">
            <h3><strong>Categorías</strong></h3>
            <div className="categoriesCarrousel__list" id='categoriesCarrousel'>
                {
                    categoriesArray.map((item, index) => {
                        return (
                            <div className="categoriesCarrousel__list-item" key={item.id} id={item.id} onClick={(e) => navigate(`/category/${item.id}`)}>
                                <Shop />
                                <h4>{item.spanishName}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CategoriesCarrousel;