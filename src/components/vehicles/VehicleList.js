import React, { Component } from "react";
import Title from '../Title';
import VehicleService from "../../service/VehicleService";

import ButtonContainer from "./ButtonContainer";

export default class VehicleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            message: null,
            rowEdit: null,
            selectedRowIndex: [],
            isTableRowSelected: false,
            objectForEdit: null
        }
        this.refreshVehicleTable = this.refreshVehicleTable.bind(this);
    }
    componentDidMount() {
        this.refreshVehicleTable();
    }
    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }
    refreshVehicleTable() {
        VehicleService.getAll()
            .then(
                response => {
                    this.setState({vehicles: response.data})
                }
            )
    }
    prepareEdit (id, e) {
        this.selectRow(id,e);
        this.getObjectForEdit();
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
    }
    getObjectForEdit () {
        this.state.vehicles.map(
            vehicle => {
                if (vehicle.id === this.state.selectedRowIndex) {
                    this.setState({objectForEdit: this.state.objectForEdit = vehicle});
                }
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
                            <ButtonContainer text="Add" type="vehicle"/>
                            <ButtonContainer className={this.state.isTableRowSelected ? "" : "btn-disable"} type="vehicle" 
                                text="Edit" obj={this.state.objectForEdit}/>
                            <ButtonContainer className={this.state.isTableRowSelected ? "" : "btn-disable"} type="vehicle" 
                                text="Delete" obj={this.state.objectForEdit}/>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                    <th>Color</th>
                                    <th>VIN</th>
                                    <th>Brand Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.vehicles.map(
                                        vehicle =>
                                            <tr key={vehicle.id} onClick={(e) => this.prepareEdit(vehicle.id, e)} 
                                                className={this.state.selectedRowIndex == vehicle.id ? "selected-row" : "" }>
                                                <td>{vehicle.model.brand.name}</td>
                                                <td>{vehicle.model.name}</td>
                                                <td>{vehicle.dateOfProduction}</td>
                                                <td>{vehicle.color}</td>
                                                <td>{vehicle.vin}</td>
                                                <td>{vehicle.model.brand.country.name}</td>
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
