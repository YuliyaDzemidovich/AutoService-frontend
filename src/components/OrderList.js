import React, { Component } from "react";
import Title from './Title';
import OrderService from "../service/OrderService";

import ButtonContainer from "./ButtonContainer";

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            message: null,
            rowEdit: null,
            selectedRowIndex: [],
            isTableRowSelected: false,
            objectForEdit: null
        }
        this.refreshOrderTable = this.refreshOrderTable.bind(this);
        this.updateTable = this.updateTable.bind(this);
    }
    componentDidMount() {
        this.refreshOrderTable();
    }
    refreshOrderTable() {
        OrderService.getAllOrders()
            .then(
                response => {
                    this.setState({orders: response.data})
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
        this.state.orders.map(
            order => {
                if (order.id === this.state.selectedRowIndex) {
                    this.setState({objectForEdit: this.state.objectForEdit = order});
                }
            }
        )
    }
    updateTable () {
        // TODO: update data without page refresh
        window.location.reload();
    }   
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Orders"></Title>
                        <div className="py-2 crudButtons">
                            <ButtonContainer text="Add" type="order" parentCallbackUpdateTable={this.updateTable}/>
                            <ButtonContainer className={this.state.isTableRowSelected ? "" : "btn-disable"} type="order" 
                                text="Edit" obj={this.state.objectForEdit} parentCallbackUpdateTable={this.updateTable}/>
                            <ButtonContainer className={this.state.isTableRowSelected ? "" : "btn-disable"} type="order" 
                                text="Delete" obj={this.state.objectForEdit} parentCallbackUpdateTable={this.updateTable}/>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Created Date</th>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Client</th>
                                    <th>Status</th>
                                    <th>Total Sum</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order =>
                                            <tr key={order.id} onClick={(e) => this.prepareEdit(order.id, e)} 
                                            className={this.state.selectedRowIndex == order.id ? "selected-row" : "" }>
                                                <td>{order.createdDate}</td>
                                                <td>{order.vehicle.model.brand.name}</td>
                                                <td>{order.vehicle.model.name}</td>
                                                <td>{order.client.name}</td>
                                                <td>{order.status}</td>
                                                <td>{order.totalSum}</td>
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
