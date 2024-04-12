import React from 'react';
import { Google } from 'react-bootstrap-icons';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="loginPage">
            <h1>Inventory x</h1>
            <form className="loginPage__Form">
                <div className="loginGoogle">
                    <button><Google /> Iniciar sesión con Google</button>
                </div>
                <p>También puedes iniciar con tu correo electrónico</p>
                <div className="loginInput">
                    <label htmlFor="txtEmail">Email:</label>
                    <input type="email" name="txtEmail" id="txtEmail" required/>
                </div>
                <div className="loginInput">
                    <label htmlFor="txtPassword">Password:</label>
                    <input type="password" name="txtPassword" id="txtPassword" required/>
                </div>
                <button type="submit">Iniciar sesión</button>
                <a href="/register">No tengo una cuenta</a>
                <a href="/forgotPassword">He olvidado mi contraseña</a>
            </form>
        </div>
    )
}

export default LoginPage