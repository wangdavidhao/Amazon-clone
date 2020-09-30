import React from 'react'
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://m.media-amazon.com/images/S/aplus-media/sota/30d6a26e-2fe3-490b-925b-30aa66b5d388.__CR0,0,999,309_PT0_SX970_V1___.jpg">

                </img>

                <div>
                    <h2 className="checkout__title">Votre panier</h2>
                </div>
            </div>

            <div className="checkout__right">
                <h2>Subtotal</h2>
            </div>

            
            
        </div>
    )
}

export default Checkout;
