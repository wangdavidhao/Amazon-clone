import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();

    console.log(user);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://m.media-amazon.com/images/S/aplus-media/sota/30d6a26e-2fe3-490b-925b-30aa66b5d388.__CR0,0,999,309_PT0_SX970_V1___.jpg">

                </img>

                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout__title">Votre panier</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}>

                        </CheckoutProduct>
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>

            

            
            
        </div>
    )
}

export default Checkout;
