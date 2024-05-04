import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';
import { setSigned } from '../../features/auth/authStore';
import Spinner from 'react-bootstrap/Spinner';
import './LoginPage.css';

const LoginPage = () => {

    const isSigned = useSelector((state) => state.isSigned.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const doLogin = (e) => {
        e.preventDefault();
        dispatch(setSigned());
        navigate('/home', {replace: true});
    }

    return (
        <div className="loginPage">
            <h1>Inventory x</h1>
            <form className="loginPage__Form" onSubmit={(e) => doLogin(e)}>
                <div className="loginGoogle">
                    <button><Google /> Iniciar sesión con Google</button>
                </div>
                <p>También puedes iniciar con tu correo electrónico</p>
                <div className="loginInput">
                    <label htmlFor="txtEmail">Email:</label>
                    <input type="email" name="txtEmail" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="loginInput">
                    <label htmlFor="txtPassword">Password:</label>
                    <input type="password" name="txtPassword" id="txtPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" disabled={!email || !password}>{isLoading ? <Spinner animation='border' variant='success'/> : 'Iniciar sesión'}</button>
                <a href="/register">No tengo una cuenta</a>
                <a href="/forgotPassword">He olvidado mi contraseña</a>
            </form>
        </div>
    )
}

export default LoginPage