import React from 'react'
import Guia from "./Guia";

import bitcoinBanner from "../assets/Bitcoin Banner.jpg"

const guias = [
    {
        id:1,
        title:"¿Qué es CriptoMet y cómo hacer un pago?",
        image: bitcoinBanner,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "CriptoMet es una plataforma de la UNIMET que te permite pagar la matrícula en USDT, una criptomoneda estable que posee el mismo valor que el USD. Para realizar un pago haz cick en 'Pagar' en el menú de navegación superior. Posteriormente ingresa la descripción y el monto a pagar. Por último haz click en el botón que dice 'Pagar'. Luego de esto serás redirigido a una ventana de confirmación, en donde deberás revisar la información y posteriormente darle click al botón de CoinPayments. Por último, la plataforma te pedirá que inicies sesión en tu cuenta de CoinPayments y culmines la transacción. Tu transacción la podrás visualizar en la pestaña de 'Facturas' si el pago fue exitoso."
    },
    {
        id:2,
        title:"¿Qué es CoinPayments y cómo crear una cuenta?",
        image: bitcoinBanner,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "CoinPayments es la pasarela de pagos que utiliza CriptoMet para que tu pago mediante criptomonedas se realice de forma rápida y segura. Cualquier persona mayor de edad puede crearse una cuenta en CoinPayments ingresando a https://www.coinpayments.net/ . Dentro de CoinPayments tendrás una billetera para que puedas enviar a ella la cantidad de UDST que desees."
    },
    {
        id:3,
        title:"¿Por qué USDT",
        image: bitcoinBanner,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "El USDT es una stablecoin, lo cual significa que las fluctuaciones del valor de esta criptomoneda son muy pequeñas, permitiendo así, poder transaccionar de forma tranquila sin la preocupación de cambios bruscos en su valor."
    },
    {
        id:4,
        title:"Título 4",
        image: bitcoinBanner,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
    {
        id:5,
        title:"Título 5",
        image: bitcoinBanner,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    },
    {
        id:6,
        title:"Título 6",
        image: bitcoinBanner,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content."
    }
]

function Guias() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="container align-items-center">
                <div className="row">
                    <h1 className="text-center">Guía</h1>
                </div>
                <br/>
                <br/>
                <div className="row">
                    {
                        guias.map(guia => (
                            <div className="row" key={guia.id}> 
                                <Guia title={guia.title} imageSource={guia.image} url={guia.url} text={guia.text}/>  
                            </div> 
                        ))
                    } 
                </div>
            </div>
        </div>
    )
}

export default Guias
