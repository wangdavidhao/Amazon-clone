import React, {useEffect} from 'react';

import './App.css';

import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Payment from './Payment.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login.js';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

//API key fourni par Stripe
const promise = loadStripe("pk_test_51HY7S9Gwk0WGk4IViWnlsQuNJz3EFM7ZhbklGiviJ2LV7yeTkYurS5dpO1c2Dlgs8twF09yi1rMxQksWuYUVbzCH00PjwPZjYf");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ', authUser);

      if(authUser){
        //connecté même en refresh
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        })

      }
    });

  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path="/">  {/*exact path because of / like user (exact path) and user/profile (path) here, / and /checkout*/}
            <Header></Header>
            <Home></Home>
          </Route>

          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
            
          </Route>
        </Switch>
            
            
      </div>
    </Router>
    
  );
}

export default App;
