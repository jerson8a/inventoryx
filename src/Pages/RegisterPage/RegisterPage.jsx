import React, { useState } from 'react';
import { Google } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../core/api/apiEndpoints';
import axiosInstance from '../../core/axios/axios';
import Spinner from 'react-bootstrap/Spinner';
import PasswordStrengthBar from 'react-password-strength-bar';
import './RegisterPage.css';

const RegisterPage = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            return;
        }

        try {
            setIsLoading(true);
            axiosInstance.post(RegisterUser, {
                email, 
                password, 
                firstName,
                lastName,
            }).then((resp) => {
                if (resp.data[0].Code == 1) {
                    navigate('/home');
                }
                else {
                    // Failed
                    console.log(resp.data[0].Message);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false);
            });
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    return (
        <div className="registerPage">
            <h1>Inventory x</h1>
            <form className="registerPage__Form" onSubmit={(e) => registerUser(e)}>
                <div className="registerGoogle">
                    <button><Google /> Registarse con Google</button>
                </div>
                <p>Registrarse con correo electrónico</p>
                <div className="registerInput">
                    <label htmlFor="txtFirstName">Nombre:</label>
                    <input type="text" name="txtFirstName" id="txtFirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div className="registerInput">
                    <label htmlFor="txtLastName">Apellido:</label>
                    <input type="text" name="txtLastName" id="txtLastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                </div>
                <div className="registerInput">
                    <label htmlFor="txtEmail">Email:</label>
                    <input type="email" name="txtEmail" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
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
                <button type="submit" disabled={!password || password != confirmPassword}>{isLoading ? <Spinner animation='border' variant='success'/> : 'Registrarme'}</button>
                <a href="/login">Ya tengo una cuenta</a>
            </form>
        </div>
    )
}

export default RegisterPage