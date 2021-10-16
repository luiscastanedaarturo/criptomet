import React from 'react'

function PagarCoinPayments() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card text-center bg-dark col-md-4 animate__animated animate__fadeInUp">
                <img src="" alt=""/> 
                <div className="card-body text-light"> 
                    <h4 className="card-title ">Confirmación de pago</h4>
                    <br/>
                    <h6 className="card-title ">Nombre y Apellido: John Doe</h6>
                    <br/>
                    <h6 className="card-title ">Cédula: 27.000.000</h6>
                    <br/>
                    <h6 className="card-title ">Descripción: 5 materias, mes de octubre</h6>
                    <br/>
                    <h6 className="card-title ">Monto: 375 USDT</h6>
                    
                    </div>
                        <form action="https://www.coinpayments.net/index.php" method="post">
                            <input type="hidden" name="cmd" value="_pay_simple"></input>
                            <input type="hidden" name="reset" value="1"></input>
                            <input type="hidden" name="merchant" value="7b8c0b4f11dd4bad2aed04cad401a433"></input>
                            <input type="hidden" name="item_name" value="5 materias, mes de octubre"></input>
                            <input type="hidden" name="currency" value="USDT"></input>
                            <input type="hidden" name="amountf" value="375.00000000"></input>
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
