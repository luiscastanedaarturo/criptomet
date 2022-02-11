import React from 'react'

import "./Guias.css"

import articulo1 from "../assets/Banner Facturas.jpg"

function Factura({title, text, fecha, nombre, cedula}) {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
          <div className="card mb-3 card text-left bg-dark animate__animated animate__fadeInUp">
          <img src={articulo1} className="img-fluid" alt="..."/>
            <div className="card-body text-light">
                  
              <div className="row">
                <h4 className="card-title col"><small className="text-muted">Estudiante: {nombre}</small></h4>
                <h4 className="card-title col"><small className="text-muted">Cédula: {cedula}</small></h4>
              </div>

              <div className="row">
                  <h5 className="card-text col">Monto: {title} USDT</h5>
                  <p className="card-text col">Descripción: {text}</p>
              </div>

              <div className="row">
                <h6 className="card-text col"><small className="text-muted">Fecha: {fecha}</small></h6>
                <div className='col'>
                  <div className='row'>
                      <div className="col-md-2"></div>
                      <div className="col-md-2"></div>
                      <div className="col-md-2"></div>
                      <div className="col-md-2"></div>
                      <div className="col-md-1"></div>
                      <div className="btn btn-outline-secondary rounded-0 col-md-2">X</div>
                      <div className="col-md-1"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    )
}

export default Factura
