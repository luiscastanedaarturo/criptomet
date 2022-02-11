import React from 'react'

import tutorial1 from "../assets/Tutorial 1.jpg"
import tutorial2 from "../assets/Tutorial 2.jpg"
import Tutorial from './Tutorial';

const tutoriales = [
    {
        id:1,
        title:"Pagar en CriptoMet",
        image: tutorial1,
        url: "https://youtu.be/3RFLQ4LA6Vk",
        text: "Aprende a realizar un pago con CriptoMet"
    }
    // {
    //     id:2,
    //     title:"Utilizar CoinPayments",
    //     image: tutorial2,
    //     url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
    //     text: "Aprende a utilizar CoinPayments"
    // }
]

function Tutoriales() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="container align-items-center">
                <div className="row">
                    <h1 class="text-center">Tutoriales</h1>
                </div>
                <br/>
                <br/>
                <div className="row">
                    {
                        tutoriales.map(tutorial => (
                            <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6" key={tutorial.id}> 
                                <Tutorial title={tutorial.title} imageSource={tutorial.image} url={tutorial.url} text={tutorial.text}/>  
                            </div> 
                            <div className="col-md-3"></div>
                            </div>
                        ))
                    } 
                </div>
          </div>
        </div>
    )
}

export default Tutoriales
