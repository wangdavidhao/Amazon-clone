import React from 'react';

import './App.css';

import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login.js';

function App() {
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
        </Switch>
            
            
      </div>
    </Router>
    
  );
}

export default App;
