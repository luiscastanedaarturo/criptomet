import React, { useEffect, useState } from 'react'
import Factura from "./Factura";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import axios from 'axios';

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
    const [time_created, setTimeCreated] = useState('');

    const getLinks = async () => {

        const q = query(collection(db, "facturas"), where("authorId", "==", firebase.auth().currentUser.uid));

        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
        });
        setFacturas(docs);
    };

    const handleClick = () => {
        console.log(this.time_created);
    };


    useEffect(() => {

        const article = { 'version': '1',
            'key':'c534692c418b595d36d6cb8940fecf680ded6bb29be733b265fa54f378df5f25',
            'cmd':'get_tx_info',
            'txid':'CPFJ3AVUFQOWOYWQPMYKDNICWX',
            // 'format':'json'
        };
        const headers = { 
            'mode':'non-cors',
            // 'Access-Control-Allow-Origin': 'http://localhost:3000',
            // 'Access-Control-Allow-Methods': 'POST',
            'Content-Type': 'application/x-www-form-urlencoded',
            'HMAC':'b07dfb601e5e3cea93a3d3abb14d5488ee96e248aad00fc87d15ce47bdd7cfeb173e362fb3fc8be21df2876df5282c26d73e4393eedb24e4b972baccfa3739eb'
        };
        axios.post('https://www.coinpayments.net/api.php', article, { headers })
            .then(response => console.log(response));

//this.setTimeCreated({ time_created: response.data.time_created })
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
            <button onClick={handleClick}>PRESS ME</button>
          </div>
        </div>
    )
}

export default Facturas
