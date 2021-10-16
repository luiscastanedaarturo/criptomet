import React from 'react'
import Factura from "./Factura";

const facturas = [
    {
        id:1,
        title:"Pagar en CriptoMet",
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
    {
        id:2,
        title:"Utilizar CoinPayments",
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
    {
        id:3,
        title:"Utilizar CoinPayments",
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
    {
        id:4,
        title:"Utilizar CoinPayments",
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
    {
        id:5,
        title:"Utilizar CoinPayments",
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
]

function Facturas() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">   
          <div className="container align-items-center">
            <div className="row">
              <h1 className="text-center">Facturas</h1>
            </div>
            <br/>
            <br/>
            <div className="row">
              {
                  facturas.map(factura => (
                      <div className="row" key={factura.id}> 
                          <Factura title={factura.title} text={factura.text}/>  
                      </div> 
                  ))
              } 
            </div>
          </div>
        </div>
    )
}

export default Facturas
