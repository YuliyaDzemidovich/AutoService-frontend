import React, { Component } from "react";
import {Switch, Route} from  "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import OrderList from "./components/OrderList";
import Cart from "./components/Cart";
import Default from "./components/Default";
import ClientList from "./components/ClientList";
import EmployeeList from "./components/EmployeeList";
import Statistics from "./components/Statistics";
import VehicleList from "./components/VehicleList";

function App() {
  return (
    <React.Fragment>
      {/* displayed for all pages */}
      <Navbar />
      <Switch>
        {/* exact for exact match,
          * otherwise all that starts with "/" is a match */}
        <Route exact path="/" component={OrderList} />
        <Route exact path="/orders" component={OrderList} />
        <Route path="/clients" component={ClientList} />
        <Route path="/vehicles" component={VehicleList} />
        <Route path="/employees" component={EmployeeList} />
        <Route path="/stats" component={Statistics} />
        <Route path="/cart" component={Cart} />
        {/* in case page not found */}
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
