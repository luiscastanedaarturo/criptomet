import React from 'react'

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Pagar() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                    <h4 className="card-title ">Ventana de Pago</h4>
                    <br/>
                    <h6 className="card-title ">Descripción</h6>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="ej. Pago de 5 materias octubre"></input> 
                    <br/>
                    <h6 className="card-title ">Monto</h6>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input type="text" class="form-control" placeholder="375"></input>
                        <span className="input-group-text">USDT</span>
                    </div>
                    <p className="text-white">El pago será realizado en Tether a través de CoinPayments. Para proceder por favor haz click en Pagar.</p>
                    <br/>
                    <Router>
                        <Link to="/CoinPayments" className="btn btn-outline-secondary rounded-0" target="_blank">
                            Pagar
                        </Link>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Pagar
