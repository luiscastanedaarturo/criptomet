import React from 'react'
import Guia from "./Guia";

import articulo1 from "../assets/Banner 1 CriptoMet.jpg"
import articulo2 from "../assets/Banner 2 CriptoMet.jpg"
import articulo3 from "../assets/Banner 3 CriptoMet.jpg"
import articulo4 from "../assets/Banner 4 CriptoMet.jpg"
import articulo5 from "../assets/Banner 5 CriptoMet.jpg"
import articulo6 from "../assets/Banner 6 CriptoMet.jpg"

const guias = [
    {
        id:1,
        title:"¿Qué es CriptoMet y cómo hacer un pago?",
        image: articulo1,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "CriptoMet es una plataforma de la UNIMET que te permite pagar la matrícula en USDT, una criptomoneda estable que posee el mismo valor que el USD. Para realizar un pago haz cick en 'Pagar' en el menú de navegación superior. Posteriormente ingresa la descripción y el monto a pagar. Por último haz click en el botón que dice 'Pagar'. Luego de esto serás redirigido a una ventana de confirmación, en donde deberás revisar la información y posteriormente darle click al botón de CoinPayments. Por último, la plataforma te pedirá que inicies sesión en tu cuenta de CoinPayments y culmines la transacción. Tu transacción la podrás visualizar en la pestaña de 'Facturas' si el pago fue exitoso.",
        fecha: "5 de Octubre del 2021"
    },
    {
        id:2,
        title:"¿Qué es CoinPayments y cómo crear una cuenta?",
        image: articulo2,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "CoinPayments es la pasarela de pagos que utiliza CriptoMet para que tu pago mediante criptomonedas se realice de forma rápida y segura. Cualquier persona mayor de edad puede crearse una cuenta en CoinPayments ingresando a https://www.coinpayments.net/ . Dentro de CoinPayments tendrás una billetera para que puedas enviar a ella la cantidad de UDST que desees.",
        fecha: "8 de Octubre del 2021"
    },
    {
        id:3,
        title:"Binance",
        image: articulo3,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Binance es el exchange más grande del mundo, el cual te permite contar con una billetera en donde almacenar todas las criptomonedas disponibles en la plataforma. Binance está disponible en Venezuela y permite que sus ciudadnos puedan intercambiar activos de manera fácil y rápida. Además, esta plataforma cuenta con una sección para transacciones P2P que facilita el intercambio entre Bolívares Digitales y USDT",
        fecha: "11 de Octubre del 2021"
    },
    {
        id:4,
        title:"¿Por qué USDT?",
        image: articulo4,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "El USDT es una stablecoin, lo cual significa que las fluctuaciones del valor de esta criptomoneda son muy pequeñas, permitiendo así, poder transaccionar de forma tranquila sin la preocupación de cambios bruscos en su valor.",
        fecha: "17 de Octubre del 2021"
    },
    {
        id:5,
        title:"Blockchain",
        image: articulo5,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text:  "La palabra Blockchain en español significa Cadena de Bloques. Básicamente es una base de datos o registro público que puede ser compartido por cualquier cantidad de usuarios en modo peer-to-peer (P2P o red de pares) y que permite el almacenamiento de la información que se maneja dentro de ella de forma inmutable y organizada. Cada máquina que descarga el software contará con una replica exacta de la cadena de bloques, asegurando así que el sistema sea invulnerable a hackeos, ya que, cada una de las máquinas debe validar la información de cada transacción. El Blockchain ha permitido la creación de las criptomonedas, activo digital que se utiliza para transaccionar de forma rápida y segura desde cualquier lugar del mundo que cuente con conexión a la red.",
        fecha: "21 de Octubre del 2021"
    },
    {
        id:6,
        title:"Criptomonedas",
        image: articulo6,
        url: "https://www.youtube.com/watch?v=1_DXtP0XyDw&list=LL&index=1&t=388s",
        text: "Las criptomonedas son simplemente monedas digitales, las cuales forman parte del dinero electrónico. Estas pueden utilizarse para comprar bienes y servicios de forma rápida, fácil y segura gracias a su sistema de cifrado, el cual garantiza una total integridad de las transacciones. Todos los días surgen nuevas criptomonedas, pero actualmente las más aceptadas a nivel global con el Bitcoin, el Ether, el BNB y el Tether; siendo esta última una representación del valor del dólar americano pero en forma de criptoactivo",
        fecha: "25 de Octubre del 2021"
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
                                <Guia title={guia.title} imageSource={guia.image} url={guia.url} text={guia.text} fecha={guia.fecha}/>  
                                <br/>
                                <br/>
                            </div> 
                        ))
                    } 
                </div>
            </div>
        </div>
    )
}

export default Guias
