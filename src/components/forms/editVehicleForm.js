import React, { Component } from 'react';
import VehicleService from "../../service/VehicleService";

export default class EditVehicleForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
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
    if (this.props.triggerText == "Edit" && this.props.obj != null) {
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
  getAddData = () => {
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
    if (this.props.triggerText == "Edit") {
      console.log("edit submit");
    } else if (this.props.triggerText == "Add") {
      //console.log("add submit");
      VehicleService.create(this.getAddData());
    }
    //console.log(this.state);
  }
  handleChange(event, field) {
    this.setState({[field]: event.target.value});
  }
   render() { 
     return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input className="form-control" id="brand" type="text" defaultValue={this.state.brand}
            onChange={(event)=>this.handleChange(event, "brand")}/>
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input className="form-control" id="model" type="text" defaultValue={this.state.model}
            onChange={(event)=>this.handleChange(event, "model")}/>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input 
            className="form-control" 
            id="year"
            placeholder="YYYY"
            type="text" 
            defaultValue={this.state.year} 
            onChange={(event)=>this.handleChange(event, "year")}/>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input className="form-control" id="color" type="text" defaultValue={this.state.color}
            onChange={(event)=>this.handleChange(event, "color")}/>
        </div>
        <div className="form-group">
          <label htmlFor="vin">VIN</label>
          <input 
            className="form-control" 
            id="vin"
            placeholder="17 signs"
            type="text" 
            defaultValue={this.state.vin} 
            onChange={(event)=>this.handleChange(event, "vin")}/>
        </div>
        <div className="form-group">
          <label htmlFor="brand_country">Brand Country</label>
          <input className="form-control" id="brand_country" type="text" defaultValue={this.state.brandCountry}
            onChange={(event)=>this.handleChange(event, "brandCountry")}/>
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  };
}
