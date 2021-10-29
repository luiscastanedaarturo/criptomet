import React from 'react'

import {
    useHistory
  } from "react-router-dom";

function PagarCoinPayments() {

    const history = useHistory();

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                    <h4 className="card-title ">Confirmación de pago</h4>
                    <br/>
                    <h6 className="card-title ">Nombre y Apellido: {history.location.state.nombre}</h6>
                    <br/>
                    <h6 className="card-title ">Cédula: {history.location.state.cedula}</h6>
                    <br/>
                    <h6 className="card-title ">Descripción: {history.location.state.descripcion}</h6>
                    <br/>
                    <h6 className="card-title ">Monto: {history.location.state.monto} USDT</h6>
                    
                    </div>
                        <form action="https://www.coinpayments.net/index.php" method="post">
                            <input type="hidden" name="cmd" value="_pay_simple"></input>
                            <input type="hidden" name="reset" value="1"></input>
                            <input type="hidden" name="merchant" value="63ce943d3153ee37da5140d83413c15d"></input>
                            <input type="hidden" name="item_name" value={history.location.state.descripcion}></input>
                            <input type="hidden" name="currency" value="USDT"></input>
                            <input type="hidden" name="amountf" value={history.location.state.monto}></input>
                            <input type="hidden" name="want_shipping" value="0"></input>
                            <input type="image" src="https://www.coinpayments.net/images/pub/buynow-grey.png" alt="Comprar ahora con CoinPayments.net"></input>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                <div>
            </div>
        </div>
    )
}

export default PagarCoinPayments
