import React, { useState } from 'react';
import { Google } from 'react-bootstrap-icons';
import PasswordStrengthBar from 'react-password-strength-bar';
import './RegisterPage.css';

const RegisterPage = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="registerPage">
            <h1>Inventory x</h1>
            <form className="registerPage__Form">
                <div className="registerGoogle">
                    <button><Google /> Registarse con Google</button>
                </div>
                <p>Registrarse con correo electrónico</p>
                <div className="registerInput">
                    <label htmlFor="txtEmail">Email:</label>
                    <input type="email" name="txtEmail" id="txtEmail" required/>
                </div>
                <div className="registerInput">
                    <label htmlFor="txtPassword">Password:</label>
                    <input type="password" name="txtPassword" id="txtPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <PasswordStrengthBar password={password} scoreWords={['Muy débil', 'Débil', 'Bien', 'Excelente', 'Guau']} shortScoreWord={'Ingresa una contraseña válida'} className='PasswordStrengthBar' />
                <div className="registerInput">
                    <label htmlFor="txtConfirmPassword">Confirmar password:</label>
                    <input type="password" name="txtConfirmPassword" id="txtConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
                <p className='labelNotSamePassword'>{password == confirmPassword ? '' : 'Contraseña no coincide'}</p>
                <button type="submit">Registrarme</button>
                <a href="/login">Ya tengo una cuenta</a>
            </form>
        </div>
    )
}

export default RegisterPage