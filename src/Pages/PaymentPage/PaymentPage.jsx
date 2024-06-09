import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Cards from 'react-credit-cards';
import './PaymentPage.css';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentPage = () => {
    const cart = useSelector((state) => state.marketCart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cardCvc, setCardCvc] = useState('');
    const [cardExpiryMonth, setCardExpiryMonth] = useState('');
    const [cardExpiryYear, setCardExpiryYear] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardFocus, setCardFocus] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [depto, setDepto] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [munsList, setMunsList] = useState({deptoName: "Guatemala", muns: ['Guatemala']});

    const deptos = [{
        deptoName: 'Guatemala', 
        muns: [
            'Guatemala', 
            'Mixco', 
            'Santa Catarina Pinula',
        ]
    }, 
    {
        deptoName: 'Quetzaltenango',
        muns: [
            'Quetzaltenango',
            'La Esperanza',
        ]
    }];

    useEffect(() => {
        setDepto(deptos[0].deptoName);
    }, []);

    useEffect(() => {
        setMunsList(deptos.filter((item) => item.deptoName == depto)[0]);
    }, [depto]);
    

    useEffect(() => {
        setCardExpiry(`${cardExpiryMonth}/${cardExpiryYear}`)
    }, [cardExpiryMonth, cardExpiryYear])

    const doPayment = (e) => {
        e.preventDefault();

        navigate('/paymentResponse/ABC123', {replace: true});
    }

    return (
        <>
            <Navbar />
            <div className="paymentPage">
                <div className="paymentPage__header">

                </div>
                <h3><strong>Estas a un paso de completar tu compra</strong></h3>
                <form className="paymentPage__form" onSubmit={(e) => doPayment(e)}>
                    <h5>Completa tus datos</h5>
                    <div className="paymentPage__formItem">
                        <label htmlFor="txtDireccion">Dirección de entrega: </label>
                        <input type="text" name='txtDireccion' onFocus={(e) => setCardFocus('name')} required/>
                    </div>
                    <div className="paymentPage__formItemContainer">
                        <div className="paymentPage__formItem">
                            <label htmlFor="txtDepartamento">Departamento: </label>
                            <select name="txtDepartamento" id="txtDepartamento" value={depto} onChange={(e) => setDepto(e.target.value)} onFocus={(e) => setCardFocus('name')}>
                                {
                                    deptos.map((item, index) => {
                                        return (
                                            <option key={index} value={item.deptoName}>{item.deptoName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="paymentPage__formItem">
                            <label htmlFor="txtMunicipio">Municipio: </label>
                            <select name="txtMunicipio" id="txtMunicipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} onFocus={(e) => setCardFocus('name')}>
                                {
                                    munsList &&
                                    munsList.muns.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="paymentPage__formItem">
                            <label htmlFor="txtTelefono">Telefono: </label>
                            <input type="tel" name='txtTelefono' onFocus={(e) => setCardFocus('name')} required/>
                        </div>
                    </div>
                    <p><strong>Datos de tarjeta</strong></p>
                    <div className="paymentPage__formItemContainer">
                        <div className='paymentPage__formCardData'>
                            <div className="paymentPage__formItem">
                                <label htmlFor="txtCardName">Nombre del titular: </label>
                                <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} onFocus={(e) => setCardFocus('name')} required/>
                            </div>
                            <div className="paymentPage__formItem">
                                <label htmlFor="txtCardName">Número en la tarjeta: </label>
                                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onFocus={(e) => setCardFocus('number')} placeholder='####-####-####-####' required/>
                            </div>
                            <div className="paymentPage__formItemContainer">
                                <div className="paymentPage__formItem">
                                    <label htmlFor="txtCardName">Expiración: </label>
                                    <input type="number" value={cardExpiryMonth} onChange={(e) => setCardExpiryMonth(e.target.value)} onFocus={(e) => setCardFocus('expiry')} placeholder='mm' required/>
                                    <label htmlFor="txtCardExpiryYear"> / </label>
                                    <input type="number" name='txtCardExpiryYear' value={cardExpiryYear} onChange={(e) => setCardExpiryYear(e.target.value)} onFocus={(e) => setCardFocus('expiry')} placeholder='yy' required/>
                                </div>
                                <div className="paymentPage__formItem">
                                    <label htmlFor="txtCardName">Código de seguridad: </label>
                                    <input type="text" value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} onFocus={(e) => setCardFocus('cvc')} placeholder='###' required />
                                </div>
                            </div>
                        </div>
                        <Cards cvc={cardCvc} expiry={cardExpiry} focused={cardFocus} name={cardName} number={cardNumber} />

                    </div>

                    <p className='paymentPage__totalText'><strong>Total a pagar: </strong>Q{cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0).toFixed(2)}</p>

                    <button onFocus={(e) => setCardFocus('name')}>Pagar</button>

                </form>
            </div>
        </>
    )
}

export default PaymentPage