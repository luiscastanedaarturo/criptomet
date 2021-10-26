import React from 'react'

import image1 from "../assets/image1.jpg"
import Tutorial from './Tutorial';

const tutoriales = [
    {
        id:1,
        title:"Pagar en CriptoMet",
        image: image1,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "En este tutorial aprenderás a realizar un pago con la plataforma de CriptoMet"
    },
    {
        id:2,
        title:"Utilizar CoinPayments",
        image: image1,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "En este tutorial aprenderás a utilizar CoinPayments"
    }
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
                            <div className="col-md-6" key={tutorial.id}> 
                                <Tutorial title={tutorial.title} imageSource={tutorial.image} url={tutorial.url} text={tutorial.text}/>  
                            </div> 
                        ))
                    } 
                </div>
          </div>
        </div>
    )
}

export default Tutoriales
