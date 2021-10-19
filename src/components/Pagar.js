import React, { useState } from 'react'
import { db } from '../firebase';

// Importación del react-router-dom
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Pagar() {

    const initializeStateValues = {
        descripcion: "",
        monto: ""
    };

    const [values, setValues] = useState(initializeStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await db.collection('facturas').doc().set(values);
        console.log('new factura');
        setValues({...initializeStateValues});
    };

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                    <h4 className="card-title ">Ventana de Pago</h4>
                    <br/>
                    <h6 className="card-title ">Descripción</h6>
                    <input value={values.descripcion} name="descripcion" onChange={handleInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Ejemplo: 5 materias, mes de octubre"></input> 
                    <br/>
                    <h6 className="card-title ">Monto</h6>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input value={values.monto} name="monto" onChange={handleInputChange} type="text" class="form-control" placeholder="Ejemplo: 375"></input>
                        <span className="input-group-text">USDT</span>
                    </div>
                    <p className="text-white">Para proceder por favor haz click en Pagar</p>
                    <Router>
                        <Link onClick={handleSubmit} className="btn btn-outline-secondary rounded-0" target="_blank">
                            Pagar
                        </Link>
                    </Router>
                </div>
            </div>
        </div>

    )
}

export default Pagar
