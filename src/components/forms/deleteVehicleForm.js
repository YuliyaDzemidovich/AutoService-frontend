import React, { Component } from 'react';
import VehicleService from "../../service/VehicleService";

export default class DeleteVehicleForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: 0,
        brand: "",
        model: "",
        year: "",
        color: "",
        vin: "",
        brandCountry: ""
      }
  }
  componentDidMount() {
    this.getInfo();
  }
  getInfo() {
    if (this.props.triggerText == "Delete" && this.props.obj != null) {
      this.setState({id: this.state.id = this.props.obj.id});
      this.setState({brand: this.state.brand = this.props.obj.model.brand.name});
      this.setState({model: this.state.model = this.props.obj.model.name});
      this.setState({year: this.state.year = this.props.obj.dateOfProduction});
      this.setState({color: this.state.color = this.props.obj.color});
      this.setState({vin: this.state.vin = this.props.obj.vin});
      this.setState({brandCountry: this.state.brandCountry = this.props.obj.model.brand.country.name});
    } 
  }
  sendBackCloseModalRequest = () => {
    this.props.parentCallbackCloseModal();
  }
  sendBackUpdateTableRequest = () => {
    this.props.parentCallbackUpdateTable();
  }
  getData = () => {
    return {
      "vin": this.state.vin,
      "dateOfProduction": this.state.year,
      "color": this.state.color,
      "model": {
        "name": this.state.model,
        "brand": {
          "name": this.state.brand,
          "country": {
            "name": this.state.brandCountry
          }
        }
      }
    };
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.sendBackCloseModalRequest();
    VehicleService.remove(this.state.id, this.getData());
    this.sendBackUpdateTableRequest();
  }
   render() { 
     return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Delete this vehicle?</label>
        </div>
        <div className="center">
          <label>{this.state.brand} {this.state.model}</label>
        </div>
        <div className="form-group">
          <button className="btn btn-danger confirm_buttons" type="submit">
            Yes
          </button>
          <button className="btn btn-secondary confirm_buttons" type="button"
            onClick={this.sendBackCloseModalRequest}>
            No
          </button>
        </div>
      </form>
    );
  };
}
