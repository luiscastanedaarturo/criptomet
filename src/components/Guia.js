import React from 'react'

import "./Guias.css"

function Guia({title, imageSource, url, text, fecha}) {
    return (
        <div className="guia container d-flex justify-content-center h-100 align-items-center">
          <div className="card mb-3 card text-left bg-dark animate__animated animate__fadeInUp">
            <img src={imageSource} className="img-fluid" alt="..."/>
            <div className="card-body text-light">
              <h5 className="card-title">{title}</h5>
              <br/>
              <p className="card-text">{text}</p>
              <p className="card-text"><small className="text-muted">{fecha}</small></p>
            </div>
          </div>
        </div>
    )
}

export default Guia
