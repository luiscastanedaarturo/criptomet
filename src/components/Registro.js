import React, {useState} from 'react'

import { useAuth } from '../context/AuthContext';

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";

function Registro() {
    
    const { signup } = useAuth();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const [name, setName] = useState(null);

    const history = useHistory();

    // const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
            // setError('Contraseñas no coinciden');
            // setTimeout(() => setError(''), 1500);
        // } else {
            try {
                signup(email, password);
                history.push('/');
            } catch (error) {
                setError('Server Error');
                setTimeout(() => setError(''), 1500);
            }
        // }
    }

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 

                {error && <p className='error'>{error}</p>}
                    <h4 className="card-title ">Registrate</h4>
                    <br/>
                    <h6 className="card-title ">Nombre</h6>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="John Doe"></input> 
                    <br/>
                    <h6 className="card-title ">Correo</h6>
                    <input onChange={handleEmail} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="john.doe@correo.unimet.edu.ve"></input> 
                    <br/>
                    <h6 className="card-title ">Contraseña</h6>
                    <input onChange={handlePassword} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="********"></input> 
                    <br/>
                    <br/>
                    <Router>
                        <Link to="/" className="btn btn-outline-secondary rounded-0" target="_blank">
                            Iniciar Sesión
                        </Link>
                        <Link onClick={handleSubmit} className="btn btn-outline-secondary rounded-0" target="_blank">
                            Registrarse
                        </Link>
                        <br/>
                        <br/>
                    </Router>
                </div>
            </div>
        </div>
    )

}

export default Registro
