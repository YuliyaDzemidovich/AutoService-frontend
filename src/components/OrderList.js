import React, { Component } from "react";
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
import OrderService from "../service/OrderService";

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this);
    }
    componentDidMount() {
        this.refreshProducts();
    }
    refreshProducts() {
        OrderService.getAllOrders()
            .then(
                response => {
                    console.log(response);
                    this.setState({orders: response.data})
                }
            )
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        {/* <Title name="our" title="products"></Title> */}
                        <Title name="Orders"></Title>
                        <h3>All Orders</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>AuthorId</th>
                                    <th>PublisherId</th>
                                    <th>Year</th>
                                    <th>ISBN</th>
                                    <th>TypeId</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order =>
                                            <tr key={order.id}> {/* TODO: fix fieds */}
                                                <td>{order.title}</td>
                                                <td>{order.authorId}</td>
                                                <td>{order.publisherId}</td>
                                                <td>{order.year}</td>
                                                <td>{order.ISBN}</td>
                                                <td>{order.typeId}</td>
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
