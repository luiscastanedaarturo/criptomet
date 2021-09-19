import React from 'react'
import PropTypes from 'prop-types'

import "./Cards.css"

function Card({title, imageSource, url, text}) {
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

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
