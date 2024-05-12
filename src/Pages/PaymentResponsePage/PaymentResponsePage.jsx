import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BagCheckFill } from 'react-bootstrap-icons';
import './PaymentResponsePage.css';

const PaymentResponsePage = () => {
    const navigate = useNavigate();

    return (
        <div className="paymentResponsePage">
            <BagCheckFill />
            <h3><strong>Tu compra ha sido procesada con éxito</strong></h3>
            <p>¡Muchas gracias por comprar en Inventory X!</p>
            <p>En breve recibirás un correo de confirmación con los datos de rastreo y factura</p>
            <p>Si tienes dudas puedes comunicarte con <a href="mailto:#">Soporte</a> </p>
            <button onClick={() => navigate('/home', {replace: true})}>Ver mi dashboard</button>
        </div>
    )
}

export default PaymentResponsePage