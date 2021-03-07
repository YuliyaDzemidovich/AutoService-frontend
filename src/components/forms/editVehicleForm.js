import React, { Component } from 'react';

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
    this.getBrand();
  }
  getBrand() {
    if (this.props.triggerText == "Edit" && this.props.obj != null) {
      //console.log(this.props.obj.model.brand.name);
      this.setState({brand: this.state.brand = this.props.obj.model.brand.name});
      this.setState({model: this.state.model = this.props.obj.model.name});
      this.setState({year: this.state.year = this.props.obj.dateOfProduction});
      this.setState({color: this.state.color = this.props.obj.color});
      this.setState({vin: this.state.vin = this.props.obj.vin});
      this.setState({brandCountry: this.state.brandCountry = this.props.obj.model.brand.country.name});
    } 
  }
   render() { 
     return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input className="form-control" id="brand" type="text" defaultValue={this.state.brand}/>
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input className="form-control" id="model" type="text" defaultValue={this.state.model}/>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input 
            className="form-control" 
            id="year"
            placeholder="YYYY"
            type="text" 
            defaultValue={this.state.year} />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input className="form-control" id="color" type="text" defaultValue={this.state.color}/>
        </div>
        <div className="form-group">
          <label htmlFor="vin">VIN</label>
          <input 
            className="form-control" 
            id="vin"
            placeholder="17 signs"
            type="text" 
            defaultValue={this.state.vin} />
        </div>
        <div className="form-group">
          <label htmlFor="brand_country">Brand Country</label>
          <input className="form-control" id="brand_country" type="text" defaultValue={this.state.brandCountry}/>
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
