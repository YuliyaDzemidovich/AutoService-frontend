import React, { Component } from "react";
import Title from './Title';

export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
        this.refreshData = this.refreshData.bind(this);
    }
    componentDidMount() {
        this.refreshData();
    }
    refreshData() {
        // do smth
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Statistics"></Title>
                        <br/>
                        <h3>Average Total Sum: 230</h3>
                        <h3>Average Time for 1 Order: 4h 15min</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
