import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct( {id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}></img>

            <div className="checkoutProduct__infos">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">  {/*_ for first parameter*/}
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Enlever du panier</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct;
