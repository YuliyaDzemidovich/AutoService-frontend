import React, { Component } from "react";
import Title from '../Title';
import VehicleService from "../../service/VehicleService";
import { ButtonDelete } from "../ButtonDelete";
import {styles} from "../../App.css";

import ButtonContainer from "./ButtonContainer";
import ReactTable from "react-table";

export default class VehicleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            message: null,
            rowEdit: null,
            selectedRowIndex: [],
            isTableRowSelected: false
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
                    this.setState({vehicles: response.data})
                }
            )
    }
    selectRow (id, e) {
        e.preventDefault();
        // selection uncheck - the same row was clicked
        if  (this.state.isTableRowSelected && this.state.selectedRowIndex === id) {
            this.setState({selectedRowIndex: this.state.selectedRowIndex = null,
                            isTableRowSelected: this.state.isTableRowSelected = false});
        }
        // select a different row - another row was selected
        else if  (this.state.isTableRowSelected && this.state.selectedRowIndex !== id) {
            this.setState({selectedRowIndex: this.state.selectedRowIndex = id});
        // select a row - no row was selected
        } else {
            this.setState({selectedRowIndex: this.state.selectedRowIndex = id,
                            isTableRowSelected: this.state.isTableRowSelected = true});
        }
        //console.log(this.state.selectedRowIndex);
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Vehicles"></Title>
                        <div className="py-2 crudButtons">
                            <ButtonContainer text="Add" type="vehicle"/>
                            <ButtonContainer text="Edit" type="vehicle"/>
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
                                            <tr key={vehicle.id} onClick={(e) => this.selectRow(vehicle.id, e)} 
                                                className={this.state.selectedRowIndex == vehicle.id ? "selected-row" : "" }>
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
