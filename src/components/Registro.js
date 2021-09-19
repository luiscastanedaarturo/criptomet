import React from 'react'

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Registro() {

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                    <h4 className="card-title ">Registrate</h4>
                    <br/>
                    <h6 className="card-title ">Nombre</h6>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="John Doe"></input> 
                    <br/>
                    <h6 className="card-title ">Correo</h6>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="john.doe@correo.unimet.edu.ve"></input> 
                    <br/>
                    <h6 className="card-title ">Contraseña</h6>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="********"></input> 
                    <br/>
                    <br/>
                    <Router>
                        <Link to="/" className="btn btn-outline-secondary rounded-0" target="_blank">
                            Iniciar Sesión
                        </Link>
                        <Link to="/registro" className="btn btn-outline-secondary rounded-0" target="_blank">
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
