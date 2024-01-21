import React from 'react';
import { CaretLeftFill, CaretRightFill, Shop } from 'react-bootstrap-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import './CategoriesCarrousel.css';

const CategoriesCarrousel = () => {

    const navigate = useNavigate();

    const scrollCarrousel = (option) => {
        const el = document.getElementById('categoriesCarrousel');
        if (el) {
            if (option === 1) {
                el.scrollTo(el.scrollLeft - 300, 0)
            } else {
                el.scrollTo(el.scrollLeft + 300, 0)
            }
        }
    }

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
                                {
                                    id: 'Cat1',
                                    spanishName: 'cat1',
                                },
                                {
                                    id: 'Cat2',
                                    spanishName: 'cat2',
                                },
                            ];

    return (
        <section className="categoriesCarrousel">
            <CaretLeftFill className='categoriesCarrousel__arrow' onClick={() => scrollCarrousel(1)} />
            <div className="categoriesCarrousel__list" id='categoriesCarrousel'>
                {
                    categoriesArray.map((item, index) => {
                        return (
                            <div className="categoriesCarrousel__list-item" id={item.id} onClick={(e) => navigate(`/category/${item.id}`)}>
                                <Shop />
                                <h4>{item.spanishName}</h4>
                            </div>
                        )
                    })
                }
            </div>
            <CaretRightFill className='categoriesCarrousel__arrow' onClick={() => scrollCarrousel(2)}/>
        </section>
    )
}

export default CategoriesCarrousel;