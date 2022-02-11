import React, {useState} from 'react'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app'
import { getAnalytics, setUserProperties } from "firebase/analytics";

import { useAuth } from '../context/AuthContext';

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";


function InicioSesion() {
    const {login} = useAuth();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/')
        } catch (error) {
            setError('Credenciales Incorrectas');
            setTimeout(() => setError(''), 1500);
        }
    }

    const handleForgotPassword = (e) => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
            // Password reset email sent!
            alert("Correo enviado exitosamente");
            
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                {/* error */}
                {error && <p className='error'>{error}</p>}
                    <h4 className="card-title ">Inicia Sesión</h4>
                    <br/>
                    <h6 className="card-title ">Correo</h6>
                    <input onChange={handleEmail} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="john.doe@correo.unimet.edu.ve"></input> 
                    <br/>
                    <h6 className="card-title ">Contraseña</h6>
                    <input onChange={handlePassword} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="********"></input> 
                    <br/>
                    <br/>
                    <Router>
                        <Link onClick={handleSubmit} className="btn btn-outline-secondary rounded-0" target="_blank">
                            Iniciar Sesión
                        </Link>
                        <Link to="/registro" className="btn btn-outline-secondary rounded-0" target="_blank">
                            Registrarse
                        </Link>
                    </Router>
                    <br/>
                    <br/>
                    
                    <a className="text-white" onClickCapture={handleForgotPassword}>¿Olvidaste la contraseña?</a>
                </div>
            </div>
        </div>
    )
}

// href="/"
export default InicioSesion


//Esto es para lo de logout
// const [error, setError] = useState(null);
// const {currentUser, logout} = useAuth();

// const handleLogout = async () => {
//     try {
//         await logout();
//     } catch (error) {
//         setError('Server error');
//     }
// }

// <button className='logout' onClick={handleLogout}>Log Out? {currentUser.email} </button>