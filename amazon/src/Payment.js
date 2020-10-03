import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider' 
import './Payment.css';

import {loadStripe} from '@stripe/stripe-js';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

import axios from './axios.js';

function Payment() {

    const history = useHistory();

    const [{basket,user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:'/payments/create?total=${getBasketTotal(basket)*100}'
            });

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    },[basket])

    console.log('SECRET IS ' , clientSecret);
    
    const handleSubmit = async(event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,
            {payment_method :{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = confirmation de paiement
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replaceState('/orders') //Replace instead of push => on revient pas sur cette page
        })

    }

    const handleChange = event => {

        //Listen pour tous les changements dans CardElement et affiche toutes les erreurs sur les infos bancaires
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to ="/checkout">{basket?.length} produits
                        </Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Adresse de livraison</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>15 avenue Victor Hugo</p>
                        <p>93500 Saint-Denis</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Vos infos de livraison et votre panier</h3>

                    </div>
                    <div className="payment__items">
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

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Méthode de paiement</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>

                            <CardElement onChange={handleChange}></CardElement>

                            <div className="payment__priceContainer">

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal ({basket.length} items) : <strong>{value}</strong>
                                            </p>
                                        </>)}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}

                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Acheter maintenant"}</span>
                                </button>
                            </div>

                            {/*Erreur*/}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment;
