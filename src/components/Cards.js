import React from 'react'
import Card from "./Card";

import image1 from "../assets/image1.jpg"

const cards = [
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
    },
    {
        id:3,
        title:"Visualizar las facturas",
        image: image1,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "En este tutorial aprenderás a visualizar tus facturas de CriptoMet"
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="container align-items-center">
                <div className="row">
                    <h1 class="text-center">Tutoriales</h1>
                </div>
                <br/>
                <div className="row">
                    {
                        cards.map(card => (
                            <div className="col-md-4" key={card.id}> 
                                <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>  
                            </div> 
                        ))
                    } 
                </div>
          </div>
        </div>
    )
}

export default Cards
