import React from 'react';
import './Footer.scss';

const Footer = () => {

    const actualYear = new Date().getFullYear();

    return (
        <section className="footer">
            <p><strong>Todos los derechos reservados.</strong></p>
            <p>{actualYear}</p>
        </section>
    )
}

export default Footer;