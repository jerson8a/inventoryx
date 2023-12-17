import React from 'react';
import emptyStreet from '../../assets/img/empty_street.svg';
import './Highlights.scss';

const Highlights = () => {
    return (
        <section className="highlights">
            <h2>Nuestros destacados</h2>
            <div className="highlights__section">
                <div className="highlights__item">
                    <img src={emptyStreet} alt="" />
                    <h4>Tienda número 1</h4>
                    <p>Abarrotes, útiles de consumo díario, librería y más.</p>
                </div>
                <div className="highlights__item">
                    <img src={emptyStreet} alt="" />
                    <h4>Tienda número 1</h4>
                    <p>Abarrotes, útiles de consumo díario, librería y más.</p>
                </div>
                <div className="highlights__item">
                    <img src={emptyStreet} alt="" />
                    <h4>Tienda número 1</h4>
                    <p>Abarrotes, útiles de consumo díario, librería y más.</p>
                </div>
                <div className="highlights__item">
                    <img src={emptyStreet} alt="" />
                    <h4>Tienda número 1</h4>
                    <p>Abarrotes, útiles de consumo díario, librería y más.</p>
                </div>
            </div>
        </section>
    )
}

export default Highlights;