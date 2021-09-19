import React from 'react'

import "./Guias.css"

function Factura({title, text}) {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
          <div class="card mb-3 card text-left bg-dark animate__animated animate__fadeInUp">
            <div class="card-body text-light">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{text}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    )
}

export default Factura
