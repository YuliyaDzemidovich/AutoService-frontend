import React, { Component } from "react";
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
import VehicleService from "../service/VehicleService";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";
import {styles} from "../App.css";

export default class VehicleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this);
    }
    componentDidMount() {
        this.refreshProducts();
    }
    refreshProducts() {
        VehicleService.getAllVehicles()
            .then(
                response => {
                    console.log(response);
                    this.setState({vehicles: response.data})
                }
            )
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Vehicles"></Title>
                        <div className="py-2 crudButtons">
                            <ButtonAdd>Add</ButtonAdd>
                            <ButtonEdit>Edit</ButtonEdit>
                            <ButtonDelete>Delete</ButtonDelete>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                    <th>Color</th>
                                    <th>VIN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.vehicles.map(
                                        vehicle =>
                                            <tr key={vehicle.id}>
                                                <td>{vehicle.model.brand.name}</td>
                                                <td>{vehicle.model.name}</td>
                                                <td>{vehicle.dateOfProduction}</td>
                                                <td>{vehicle.color}</td>
                                                <td>{vehicle.vin}</td>
                                            </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
