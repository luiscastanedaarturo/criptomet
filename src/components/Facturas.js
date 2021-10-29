import React, { useEffect, useState } from 'react'
import Factura from "./Factura";
import { db } from '../firebase';

// const facturas = [
//     {
//         id:1,
//         title:"Pagar en CriptoMet",
//         url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
//         text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
//     },
//     {
//         id:2,
//         title:"Utilizar CoinPayments",
//         url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
//         text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
//     },
//     {
//         id:3,
//         title:"Utilizar CoinPayments",
//         url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
//         text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
//     },
//     {
//         id:4,
//         title:"Utilizar CoinPayments",
//         url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
//         text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
//     },
//     {
//         id:5,
//         title:"Utilizar CoinPayments",
//         url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
//         text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
//     },
// ]

function Facturas() {

    const [facturas, setFacturas] = useState([]);

    const getLinks = async () => {
        db.collection('facturas').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setFacturas(docs);
        });
    };

    useEffect(() => {
        getLinks();
    }, []);

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
                          <Factura title={factura.monto} text={factura.descripcion} fecha={factura.fecha} nombre={factura.nombre} cedula={factura.cedula}/>  
                      </div> 
                  ))
              } 
            </div>
          </div>
        </div>
    )
}

export default Facturas
