import React from 'react'

import "./Cards.css"

function Tutorial({title, imageSource, url, text}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <img src={imageSource} alt=""/> 
            <div className="card-body text-light"> 
                <h4 className="card-title ">
                    {title}
                </h4>
                <p className="card-text">
                    {text} 
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Ver video
                </a>
            </div>
        </div>
    )
}

export default Tutorial
