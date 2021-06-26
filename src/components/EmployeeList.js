import React, { Component } from "react";
import Title from './Title';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            message: null
        }
        this.refreshEmployees = this.refreshEmployees.bind(this);
    }
    componentDidMount() {
        this.refreshEmployees();
    }
    refreshEmployees() {

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
                                    <th>Nothing here yet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                            <tr>
                                                <td>row</td>
                                            </tr>
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
