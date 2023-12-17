import React from 'react';
import { CaretLeftFill, CaretRightFill, Shop } from 'react-bootstrap-icons';
import './CategoriesCarrousel.css';

const CategoriesCarrousel = () => {

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

    return (
        <section className="categoriesCarrousel">
            <CaretLeftFill className='categoriesCarrousel__arrow' onClick={() => scrollCarrousel(1)} />
            <div className="categoriesCarrousel__list" id='categoriesCarrousel'>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
                <div className="categoriesCarrousel__list-item">
                    <Shop />
                    <h4>Supermercados</h4>
                </div>
            </div>
            <CaretRightFill className='categoriesCarrousel__arrow' onClick={() => scrollCarrousel(2)}/>
        </section>
    )
}

export default CategoriesCarrousel;