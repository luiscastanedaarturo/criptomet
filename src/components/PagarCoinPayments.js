import React from 'react'

function PagarCoinPayments() {
    return (
        <div>
            <form action="https://www.coinpayments.net/index.php" method="post">
                <input type="hidden" name="cmd" value="_pay_simple"></input>
                <input type="hidden" name="reset" value="1"></input>
                <input type="hidden" name="merchant" value="7b8c0b4f11dd4bad2aed04cad401a433"></input>
                <input type="hidden" name="item_name" value="Matrícula"></input>
                <input type="hidden" name="currency" value="USDT"></input>
                <input type="hidden" name="amountf" value="10.00000000"></input>
                <input type="hidden" name="want_shipping" value="0"></input>
                <input type="image" src="https://www.coinpayments.net/images/pub/buynow-wide-yellow.png" alt="Buy Now with CoinPayments.net"></input>
            </form>
        </div>
    )
}

export default PagarCoinPayments
