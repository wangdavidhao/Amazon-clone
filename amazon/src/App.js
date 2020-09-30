import React from 'react';

import './App.css';

import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">  {/*exact path because of / like user (exact path) and user/profile (path) here, / and /checkout*/}
            <Home></Home>
          </Route>

          <Route exact path="/checkout">
            <Checkout></Checkout>
            
          </Route>
        </Switch>
            
            
      </div>
    </Router>
    
  );
}

export default App;
