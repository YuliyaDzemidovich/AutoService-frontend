import React, { Component } from "react";
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
import BookDataService from "../service/BookDataService";

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this);
    }
    componentDidMount() {
        this.refreshProducts();
    }
    refreshProducts() {
        BookDataService.getAllBooks()
            .then(
                response => {
                    console.log(response);
                    this.setState({books: response.data})
                }
            )
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Employees"></Title>
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
                                    this.state.books.map(
                                        book =>
                                            <tr key={book.id}>
                                                <td>{book.title}</td>
                                                <td>{book.authorId}</td>
                                                <td>{book.publisherId}</td>
                                                <td>{book.year}</td>
                                                <td>{book.ISBN}</td>
                                                <td>{book.typeId}</td>
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
