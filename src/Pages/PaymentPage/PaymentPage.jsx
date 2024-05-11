import React, { useState } from 'react';
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
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardFocus, setCardFocus] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    return (
        <>
            <Navbar />
            <div className="paymentPage">
                <div className="paymentPage__header">

                </div>
                <h3><strong>Estas a un paso de completar tu compra</strong></h3>
                <form className="paymentPage__form">
                    <h5>Completa tus datos</h5>
                    <div className="paymentPage__formItem">
                        <label htmlFor="txtDireccion">Dirección de entrega: </label>
                        <input type="text" name='txtDireccion' />
                    </div>
                    <div className="paymentPage__formItemContainer">
                        <div className="paymentPage__formItem">
                            <label htmlFor="txtDepartamento">Departamento: </label>
                            <select name="txtDepartamento" id="txtDepartamento">
                                <option value="Guatemala">Guatemala</option>
                                <option value="Quetzaltenango">Quetzaltenango</option>
                            </select>
                        </div>
                        <div className="paymentPage__formItem">
                            <label htmlFor="txtMunicipio">Municipio: </label>
                            <select name="txtMunicipio" id="txtMunicipio">
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guatemala">Mixco</option>
                                <option value="Guatemala">Santa Catarina Pinula</option>
                            </select>
                        </div>
                    </div>
                    <div className="paymentPage__formItemContainer">
                        <div className="paymentPage__formItem">
                            <label htmlFor="txtTelefono">Telefono: </label>
                            <input type="tel" name='txtTelefono'/>
                        </div>
                    </div>
                    <div className="paymentPage__formItemContainer">
                        <div className='paymentPage__formCardData'>
                            <div className="paymentPage__formItem">
                                <label htmlFor="txtCardName">Número en la tarjeta: </label>
                                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onFocus={(e) => setCardFocus('number')}/>
                            </div>
                            <div className="paymentPage__formItem">
                                <label htmlFor="txtCardName">Nombre del titular: </label>
                                <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} onFocus={(e) => setCardFocus('name')}/>
                            </div>
                            <div className="paymentPage__formItemContainer">
                                <div className="paymentPage__formItem">
                                    <label htmlFor="txtCardName">Expiración: </label>
                                    <input type="text" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} onFocus={(e) => setCardFocus('expiry')}/>
                                </div>
                                <div className="paymentPage__formItem">
                                    <label htmlFor="txtCardName">Código de seguridad: </label>
                                    <input type="text" value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} onFocus={(e) => setCardFocus('cvc')} />
                                </div>
                            </div>
                        </div>
                        <Cards cvc={cardCvc} expiry={cardExpiry} focused={cardFocus} name={cardName} number={cardNumber} />

                    </div>

                    <p className='paymentPage__totalText'><strong>Total a pagar: </strong>Q{cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0).toFixed(2)}</p>

                    <button>Pagar</button>

                </form>
            </div>
        </>
    )
}

export default PaymentPage