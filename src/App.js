import React, { Component } from "react";
import {Switch, Route} from  "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      {/* displayed for all pages */}
      <Navbar />
      <Switch>
        {/* exact for exact match,
          * otherwise all that starts with "/" is a match */}
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        {/* in case page not found */}
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
