import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './conponents/Header/Header';
import Inventory from './conponents/Inventory/Inventory';
import Notfound from './conponents/Notfound/Notfound';
import Productdetail from './conponents/Productdetail/Productdetail';
import Review from './conponents/Review/Review';
import Shop from './conponents/Shop/Shop';

function App() {
  
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          
          <Route path="/shop">
            <Shop></Shop>
          </Route>
        
        <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
            
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route  path="/product/:productKey">
            <Productdetail></Productdetail>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        
      </Router>
      
      
    </div>
  );
}

export default App;
